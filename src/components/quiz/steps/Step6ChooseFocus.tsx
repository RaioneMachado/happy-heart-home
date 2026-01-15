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
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-center text-foreground mb-8">
            Escolha seu <span className="text-primary">foco</span>
          </h1>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {focusOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => toggleOption(option.value)}
                className={`px-5 py-3 rounded-full border-2 transition-all duration-300 font-medium shadow-md hover:shadow-lg ${
                  selected.includes(option.value)
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 border-transparent text-white shadow-lg'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-pink-300'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {selected.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-6"
            >
              <p className="text-gray-600">
                <span className="font-bold text-pink-600">{selected.length}</span> opção{selected.length !== 1 ? 'es' : ''} selecionada{selected.length !== 1 ? 's' : ''}
              </p>
            </motion.div>
          )}
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