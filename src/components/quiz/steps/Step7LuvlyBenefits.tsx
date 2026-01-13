import { motion } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { ContinueButton } from '../shared/ContinueButton';

const benefits = [
  {
    emoji: '👩',
    title: 'Treinos faciais diários focados nos seus objetivos',
  },
  {
    emoji: '📋',
    title: 'Recomendações de produtos skincare para sua pele e problemas',
  },
  {
    emoji: '💄',
    title: 'Scanner de cosméticos',
  },
];

export function Step7LuvlyBenefits() {
  const { nextStep } = useQuiz();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader showBack />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-center text-foreground mb-2">
            Com Luvly todo <span className="text-primary">rosto envelhece</span>
            <br />
            <span className="text-primary">graciosamente</span>
          </h1>
          
          <p className="text-center text-muted-foreground mb-8">
            Veja como vamos ajudá-la a alcançar seus objetivos:
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-6 shadow-lg border border-primary/10"
          >
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`flex items-center gap-4 ${
                    index !== benefits.length - 1 ? 'pb-4 border-b border-border' : ''
                  }`}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">{benefit.emoji}</span>
                  </div>
                  <p className="text-foreground font-medium">{benefit.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <ContinueButton onClick={nextStep} />
    </div>
  );
}
