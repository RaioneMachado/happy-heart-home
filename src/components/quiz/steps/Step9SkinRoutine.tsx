import { motion } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';

const options = [
  { label: 'Sim, tenho rotina matinal e noturna', value: 'both' },
  { label: 'Apenas rotina matinal', value: 'morning' },
  { label: 'Apenas rotina noturna', value: 'evening' },
  { label: 'Não, não tenho nenhuma rotina', value: 'none' },
];

export function Step9SkinRoutine() {
  const { updateQuizData, nextStep } = useQuiz();

  const handleSelect = (value: string) => {
    updateQuizData({ skinRoutine: value });
    nextStep();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader showBack showProgress />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-center text-foreground mb-2">
            Rotina de cuidados com a pele
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Você tem uma rotina diária de cuidados com a pele?
          </p>

          <div className="space-y-3">
            {options.map((option, index) => (
              <motion.button
                key={option.value}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleSelect(option.value)}
                className="w-full p-4 rounded-2xl bg-card shadow-sm border border-border hover:border-primary/50 hover:shadow-md transition-all text-left"
              >
                <span className="font-medium text-foreground">{option.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
