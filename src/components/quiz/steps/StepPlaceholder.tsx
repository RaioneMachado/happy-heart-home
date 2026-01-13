import { motion } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { ContinueButton } from '../shared/ContinueButton';

interface StepPlaceholderProps {
  stepNumber: number;
}

export function StepPlaceholder({ stepNumber }: StepPlaceholderProps) {
  const { nextStep } = useQuiz();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader showBack showProgress />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl font-bold text-primary">{stepNumber}</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Etapa {stepNumber}
          </h1>
          <p className="text-muted-foreground">
            Aguardando imagem para implementar esta etapa
          </p>
        </motion.div>
      </div>

      <ContinueButton onClick={nextStep} />
    </div>
  );
}
