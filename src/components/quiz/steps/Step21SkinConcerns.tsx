import { useState } from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { ContinueButton } from '../shared/ContinueButton';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const options = [
  { label: 'Acne e espinhas', value: 'acne' },
  { label: 'Vermelhidão', value: 'redness' },
  { label: 'Opacidade', value: 'dullness' },
  { label: 'Textura áspera', value: 'rough_texture' },
  { label: 'Tom de pele irregular', value: 'uneven_tone' },
  { label: 'Alterações de pigmentação', value: 'pigmentation' },
  { label: 'Nenhuma das opções acima', value: 'none' },
];

export function Step21SkinConcerns() {
  const { updateQuizData, nextStep } = useQuiz();
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (value: string) => {
    if (value === 'none') {
      setSelected(['none']);
    } else {
      setSelected(prev => {
        const filtered = prev.filter(v => v !== 'none');
        if (filtered.includes(value)) {
          return filtered.filter(v => v !== value);
        }
        return [...filtered, value];
      });
    }
  };

  const handleNext = () => {
    updateQuizData({ skinConcerns: selected });
    nextStep();
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <QuizHeader currentProgressStep={3} />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-foreground">
            Você tem alguma das
            <br />
            seguintes preocupações com a pele?
          </h2>
        </motion.div>

        <div className="w-full max-w-md space-y-3">
          {options.map((option, index) => (
            <motion.button
              key={option.value}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleToggle(option.value)}
              className={`
                w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-card shadow-sm
                transition-all duration-200
                ${selected.includes(option.value) 
                  ? 'ring-2 ring-primary bg-primary/5' 
                  : 'hover:bg-secondary/50'}
              `}
            >
              <span className="font-medium text-foreground">{option.label}</span>
              <div className={`
                w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                ${selected.includes(option.value) 
                  ? 'border-primary bg-primary' 
                  : 'border-border'}
              `}>
                {selected.includes(option.value) && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </div>
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
