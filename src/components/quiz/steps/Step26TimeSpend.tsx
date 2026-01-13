import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { OptionCard } from '../shared/OptionCard';
import { motion } from 'framer-motion';

const options = [
  { label: 'Menos de 5 minutos', value: 'less_5' },
  { label: '5-15 minutos', value: '5_15' },
  { label: 'Mais de 15 minutos', value: 'more_15' },
];

export function Step26TimeSpend() {
  const { updateQuizData, nextStep } = useQuiz();

  const handleSelect = (value: string) => {
    updateQuizData({ timeSpend: value });
    nextStep();
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <QuizHeader currentProgressStep={3} />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-foreground">
            Quanto tempo você gostaria
            <br />
            de dedicar ao seu plano de
            <br />
            <span className="text-primary">yoga facial</span>?
          </h2>
          <p className="text-muted-foreground mt-4">
            Por favor, selecione a opção mais adequada
          </p>
        </motion.div>

        <div className="w-full max-w-md space-y-3">
          {options.map((option, index) => (
            <OptionCard
              key={option.value}
              label={option.label}
              onClick={() => handleSelect(option.value)}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
