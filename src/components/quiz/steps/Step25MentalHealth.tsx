import { useState } from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { ContinueButton } from '../shared/ContinueButton';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const options = [
  { label: 'Estava estressado(a)', value: 'stressed' },
  { label: 'Tive insônia', value: 'insomnia' },
  { label: 'Estou sofrendo de ansiedade e ataques de pânico', value: 'anxiety' },
  { label: 'Estive me sentindo deprimido(a)', value: 'depressed' },
  { label: 'Nenhuma das opções acima', value: 'none' },
  { label: 'Prefiro não responder', value: 'prefer_not' },
];

export function Step25MentalHealth() {
  const { updateQuizData, nextStep } = useQuiz();
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (value: string) => {
    if (value === 'none' || value === 'prefer_not') {
      setSelected([value]);
    } else {
      setSelected(prev => {
        const filtered = prev.filter(v => v !== 'none' && v !== 'prefer_not');
        if (filtered.includes(value)) {
          return filtered.filter(v => v !== value);
        }
        return [...filtered, value];
      });
    }
  };

  const handleNext = () => {
    updateQuizData({ mentalHealth: selected });
    nextStep();
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <QuizHeader showProgress={false} />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 max-w-md"
        >
          <h2 className="text-xl font-bold text-foreground">
            Outros fatores como estresse, sono ou
            sua dieta podem estar afetando sua pele.
            Como tem sido sua <span className="text-primary">saúde mental</span> ultimamente?
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
