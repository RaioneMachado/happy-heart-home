import { AnimatePresence } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';
import { Step1Age } from './steps/Step1Age';

export function QuizContainer() {
  const { currentStep } = useQuiz();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Age />;
      // Adicionar mais etapas conforme forem enviadas
      default:
        return <Step1Age />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      {renderStep()}
    </AnimatePresence>
  );
}
