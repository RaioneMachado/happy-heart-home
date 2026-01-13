import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { OptionCard } from '../shared/OptionCard';
import { motion } from 'framer-motion';

const options = [
  { label: 'Regular', value: 'regular' },
  { label: 'Irregular', value: 'irregular' },
  { label: 'Não tenho ciclo devido à idade ou condição médica', value: 'no_cycle' },
  { label: 'Não sei / Prefiro não responder', value: 'prefer_not' },
];

export function Step24MenstrualCycle() {
  const { updateQuizData, nextStep, quizData } = useQuiz();

  // Skip this step if user is male
  if (quizData.gender === 'male') {
    nextStep();
    return null;
  }

  const handleSelect = (value: string) => {
    updateQuizData({ menstrualCycle: value });
    nextStep();
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <QuizHeader showProgress={false} />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 max-w-md"
        >
          <h2 className="text-xl font-bold text-foreground">
            Durante a menstruação, os níveis de
            estrogênio e progesterona podem
            afetar a condição da sua pele. Seu
            ciclo menstrual é <span className="text-primary">regular</span>?
          </h2>
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
