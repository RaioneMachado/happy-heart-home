import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { useQuiz } from '@/contexts/QuizContext';

interface QuizHeaderProps {
  showBack?: boolean;
  showProgress?: boolean;
  totalProgressSteps?: number;
  currentProgressStep?: number;
}

export function QuizHeader({ 
  showBack = true, 
  showProgress = true,
  totalProgressSteps = 4,
  currentProgressStep = 2
}: QuizHeaderProps) {
  const { prevStep, currentStep } = useQuiz();

  return (
    <header className="w-full bg-background sticky top-0 z-50">
      <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-between">
        {showBack && currentStep > 1 ? (
          <button 
            onClick={prevStep}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        ) : (
          <div className="w-9" />
        )}
        <h1 className="text-2xl font-semibold tracking-tight">•Luvly</h1>
        <div className="w-9" />
      </div>
      
      {showProgress && (
        <div className="flex items-center justify-center gap-0 pb-4">
          {Array.from({ length: totalProgressSteps }).map((_, index) => {
            const stepNum = index + 1;
            const isCompleted = stepNum < currentProgressStep;
            const isCurrent = stepNum === currentProgressStep;
            
            return (
              <div key={index} className="flex items-center">
                <div className={`
                  w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium
                  ${isCompleted ? 'bg-primary text-white' : 
                    isCurrent ? 'border-2 border-primary text-primary' : 
                    'text-muted-foreground'}
                `}>
                  {isCompleted ? <Check className="w-4 h-4" /> : stepNum}
                </div>
                {index < totalProgressSteps - 1 && (
                  <div className={`
                    w-16 h-0.5
                    ${stepNum < currentProgressStep ? 'bg-primary' : 'bg-border'}
                  `} />
                )}
              </div>
            );
          })}
        </div>
      )}
      
      <div className="w-full h-px bg-border" />
    </header>
  );
}
