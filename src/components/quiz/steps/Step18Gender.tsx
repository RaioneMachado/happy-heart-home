import { useState } from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { motion, AnimatePresence } from 'framer-motion';
import womanBefore from '@/assets/woman-before-treatment.jpg';
import womanAfter from '@/assets/woman-after-treatment.jpg';

const options = [
  { label: 'Feminino', value: 'female' },
  { label: 'Masculino', value: 'male' },
];

export function Step18Gender() {
  const { updateQuizData, nextStep } = useQuiz();
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    updateQuizData({ gender: value });
    // Auto advance after a short delay to show the image
    setTimeout(() => {
      nextStep();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <QuizHeader currentProgressStep={2} />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-foreground">
            Você é:
          </h2>
        </motion.div>

        <div className="w-full max-w-md space-y-3">
          {options.map((option, index) => (
            <motion.button
              key={option.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleSelect(option.value)}
              className={`w-full p-4 rounded-2xl border-2 transition-all text-left font-medium ${
                selected === option.value
                  ? 'border-primary bg-primary/10'
                  : 'border-border bg-card hover:border-primary/50'
              }`}
            >
              {option.label}
            </motion.button>
          ))}
        </div>

        {/* Show woman before/after when female is selected */}
        <AnimatePresence>
          {selected === 'female' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 w-full max-w-md"
            >
              <div className="flex gap-4 justify-center">
                <div className="text-center">
                  <div className="rounded-xl overflow-hidden w-32 h-40 md:w-40 md:h-48">
                    <img 
                      src={womanBefore} 
                      alt="Antes" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Antes</p>
                </div>
                <div className="text-center">
                  <div className="rounded-xl overflow-hidden w-32 h-40 md:w-40 md:h-48">
                    <img 
                      src={womanAfter} 
                      alt="Depois" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Depois</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
