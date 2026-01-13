import { motion } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';

const options = [
  { emoji: '😍', label: 'Sim, só quero manter esse resultado para sempre', value: 'satisfied' },
  { emoji: '😊', label: 'Não muito, ainda preciso de pequenas melhorias', value: 'need-improvement' },
  { emoji: '🥺', label: 'Não, tenho muitos problemas de pele', value: 'not-satisfied' },
];

export function Step5SkinSatisfaction() {
  const { updateQuizData, nextStep } = useQuiz();

  const handleSelect = (value: string) => {
    updateQuizData({ skinSatisfaction: value });
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
          <h1 className="text-2xl font-bold text-center text-foreground mb-8">
            Você está geralmente satisfeita
            <br />
            com sua condição de pele hoje?
          </h1>

          <div className="space-y-3">
            {options.map((option, index) => (
              <motion.button
                key={option.value}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleSelect(option.value)}
                className="w-full p-4 rounded-2xl bg-card shadow-sm border border-border hover:border-primary/50 hover:shadow-md transition-all flex items-center gap-3 text-left"
              >
                <span className="text-2xl">{option.emoji}</span>
                <span className="font-medium text-foreground">{option.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
