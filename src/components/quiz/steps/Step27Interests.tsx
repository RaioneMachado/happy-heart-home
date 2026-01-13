import { useState } from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { ContinueButton } from '../shared/ContinueButton';
import { motion } from 'framer-motion';

const options = [
  { 
    label: 'Acompanhar o progresso da minha pele ao longo do tempo', 
    value: 'track_progress',
    color: 'bg-pink-100'
  },
  { 
    label: 'Verificar se o produto não é prejudicial', 
    value: 'check_products',
    color: 'bg-orange-100'
  },
  { 
    label: 'Montar uma rotina de beleza', 
    value: 'beauty_routine',
    color: 'bg-green-100'
  },
  { 
    label: 'Cuidados corporais', 
    value: 'body_care',
    color: 'bg-blue-100'
  },
  { 
    label: 'Cuidados com os cabelos', 
    value: 'hair_care',
    color: 'bg-amber-100'
  },
  { 
    label: 'Rituais de relaxamento', 
    value: 'relaxation',
    color: 'bg-rose-100'
  },
];

export function Step27Interests() {
  const { updateQuizData, nextStep } = useQuiz();
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (value: string) => {
    setSelected(prev => {
      if (prev.includes(value)) {
        return prev.filter(v => v !== value);
      }
      return [...prev, value];
    });
  };

  const handleNext = () => {
    updateQuizData({ interests: selected });
    nextStep();
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <QuizHeader currentProgressStep={3} />
      
      <div className="flex-1 flex flex-col items-center px-4 py-6 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h2 className="text-xl font-bold text-foreground">
            Além dos treinos de Yoga Facial
            <br />
            no seu plano, o que mais
            <br />
            te interessa?
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 max-w-md w-full">
          {options.map((option, index) => (
            <motion.button
              key={option.value}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleToggle(option.value)}
              className={`
                relative rounded-2xl overflow-hidden h-32 transition-all duration-200
                ${selected.includes(option.value) 
                  ? 'ring-2 ring-primary' 
                  : 'hover:shadow-md'}
              `}
            >
              <div className={`absolute inset-0 ${option.color}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-3">
                <span className="text-sm font-medium text-foreground text-left">
                  {option.label}
                </span>
              </div>
              {selected.includes(option.value) && (
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
      
      <ContinueButton 
        onClick={handleNext} 
        disabled={selected.length === 0}
        label="Próximo"
      />
    </div>
  );
}
