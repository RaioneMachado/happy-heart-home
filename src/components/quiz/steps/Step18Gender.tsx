import { useState } from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { motion } from 'framer-motion';

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
    // Auto advance after a short delay
    setTimeout(() => {
      nextStep();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader showBack showProgress />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-center text-foreground mb-8">
            Você é:
          </h1>

          <div className="space-y-4">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 text-left group relative overflow-hidden ${
                  selected === option.value
                    ? 'border-transparent bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg'
                    : 'border-gray-200 bg-white hover:border-pink-300 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Sombra rosa sutil no fundo para hover */}
                {!selected && (
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
                
                {/* Texto */}
                <div className="relative z-10">
                  <span className={`font-semibold text-lg ${selected === option.value ? 'text-white' : 'text-gray-800 group-hover:text-gray-900'}`}>
                    {option.label}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200">
                <span className="text-rose-700 font-medium text-sm">
                  Avançando automaticamente...
                </span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}