import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { OptionCard } from '../shared/OptionCard';
import { motion } from 'framer-motion';

const options = [
  { label: 'Todo dia', value: 'everyday' },
  { label: 'Frequentemente', value: 'often' },
  { label: 'Às vezes', value: 'sometimes' },
  { label: 'Nunca', value: 'never' },
];

export function Step16Sugar() {
  const { updateQuizData, nextStep } = useQuiz();

  const handleSelect = (value: string) => {
    updateQuizData({ sugarConsumption: value });
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
            Açúcar
          </h2>
          <p className="text-muted-foreground">
            Com que frequência você consome produtos com
            <br />
            açúcar adicionado, como doces, refrigerantes, biscoitos, etc?
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
