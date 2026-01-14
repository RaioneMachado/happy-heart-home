import { motion } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';

export function Step33Newsletter() {
  const { nextStep, updateQuizData } = useQuiz();

  const handleChoice = (wantsNewsletter: boolean) => {
    updateQuizData({ wantsNewsletter });
    nextStep();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md text-center"
        >
          <h1 className="text-2xl font-bold text-foreground mb-8">
            Você quer receber emails com dicas de{' '}
            <span className="text-primary">Yoga Facial</span> e atualizações do app Luvya?
          </h1>

          <button
            onClick={() => handleChoice(true)}
            className="w-full py-4 rounded-full quiz-gradient text-white font-semibold mb-4 hover:opacity-90 transition-opacity"
          >
            SIM, EU QUERO
          </button>

          <button
            onClick={() => handleChoice(false)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
          >
            Não quero receber dicas ou atualizações
          </button>
        </motion.div>
      </div>
    </div>
  );
}