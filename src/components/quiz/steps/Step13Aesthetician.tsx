import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { OptionCard } from '../shared/OptionCard';
import { motion } from 'framer-motion';

const options = [
  { label: 'Uma vez por mês ou mais', value: 'monthly' },
  { label: 'Uma vez a cada poucos meses', value: 'several_months' },
  { label: 'Uma vez por ano', value: 'yearly' },
  { label: 'Nunca', value: 'never' },
];

export function Step13Aesthetician() {
  const { updateQuizData, nextStep } = useQuiz();

  const handleSelect = (value: string) => {
    updateQuizData({ aestheticianVisits: value });
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
            Visitas ao Esteticista
          </h2>
          <p className="text-muted-foreground">
            Com que frequência você visita um esteticista?
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
