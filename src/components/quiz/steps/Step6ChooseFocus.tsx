import { motion } from 'framer-motion';
import { useState } from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { ContinueButton } from '../shared/ContinueButton';

const focusOptions = [
  { label: 'Esculpir o rosto', value: 'sculpting' },
  { label: 'Pele fresca', value: 'fresh' },
  { label: 'Levantar pálpebras caídas', value: 'eyelids' },
  { label: 'Aumentar colágeno', value: 'collagen' },
  { label: 'Rotina consistente', value: 'routine' },
  { label: 'Tom de pele uniforme', value: 'even-tone' },
  { label: 'Eliminar olheiras', value: 'dark-circles' },
  { label: 'Lifting facial', value: 'lifting' },
  { label: 'Reduzir inchaço', value: 'puffiness' },
  { label: 'Redução de papada', value: 'double-chin' },
];

export function Step6ChooseFocus() {
  const { updateQuizData, nextStep } = useQuiz();
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (value: string) => {
    setSelected(prev => 
      prev.includes(value) 
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const handleContinue = () => {
    updateQuizData({ focusAreas: selected });
    nextStep();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader showBack showProgress />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-center text-foreground mb-8">
            Escolha seu foco
          </h1>

          <div className="flex flex-wrap justify-center gap-2">
            {focusOptions.map((option, index) => (
              <motion.button
                key={option.value}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => toggleOption(option.value)}
                className={`px-4 py-2 rounded-full border-2 transition-all ${
                  selected.includes(option.value)
                    ? 'bg-blue-100 border-blue-300 text-blue-700'
                    : 'bg-card border-border text-foreground hover:border-blue-200'
                }`}
              >
                {option.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      <ContinueButton 
        onClick={handleContinue} 
        disabled={selected.length === 0}
        label="Próximo"
      />
    </div>
  );
}
