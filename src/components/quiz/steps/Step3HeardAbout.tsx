import { motion } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';

const options = [
  { label: 'Não tenho certeza', value: 'not-sure' },
  { label: 'Sei algumas coisas', value: 'know-few' },
  { label: 'Sim, sei tudo sobre isso', value: 'know-all' },
];

export function Step3HeardAbout() {
  const { updateQuizData, nextStep } = useQuiz();

  const handleSelect = (value: string) => {
    updateQuizData({ heardAboutFaceYoga: value });
    nextStep();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader showBack />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-center text-foreground mb-8">
            Você já ouviu falar sobre
            <br />
            Yoga Facial antes?
          </h1>

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
