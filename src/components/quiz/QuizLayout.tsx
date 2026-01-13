import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

interface QuizLayoutProps {
  children: ReactNode;
  showHeader?: boolean;
  showProgress?: boolean;
  currentStep?: number;
  totalSteps?: number;
}

export function QuizLayout({ 
  children, 
  showHeader = true,
  showProgress = false,
  currentStep = 1,
  totalSteps = 35
}: QuizLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {showHeader && (
        <header className="w-full border-b border-border bg-background sticky top-0 z-50">
          <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-between">
            <div className="w-8" />
            <h1 className="text-2xl font-semibold tracking-tight">•Luvly</h1>
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
          {showProgress && (
            <div className="w-full h-1 bg-secondary">
              <motion.div 
                className="h-full quiz-gradient"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}
        </header>
      )}
      
      <main className="flex-1 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-1 flex flex-col"
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
