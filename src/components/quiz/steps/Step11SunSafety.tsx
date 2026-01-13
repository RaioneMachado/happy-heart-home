import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { OptionCard } from '../shared/OptionCard';
import { motion } from 'framer-motion';

const options = [
  { label: 'Sim, sempre', value: 'always' },
  { label: 'Sim, mas apenas quando está sol', value: 'sunny' },
  { label: 'Às vezes', value: 'sometimes' },
  { label: 'Nunca', value: 'never' },
];

export function Step11SunSafety() {
  const { updateQuizData, nextStep } = useQuiz();

  const handleSelect = (value: string) => {
    updateQuizData({ sunSafety: value });
    nextStep();
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
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Proteção Solar
          </h2>
          <p className="text-muted-foreground">
            Você usa protetor solar quando sai de casa?
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
