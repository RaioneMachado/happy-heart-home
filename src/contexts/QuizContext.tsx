import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface QuizData {
  age?: string;
  // Adicionar mais campos conforme as etapas
  [key: string]: any;
}

interface QuizContextType {
  currentStep: number;
  quizData: QuizData;
  setCurrentStep: (step: number) => void;
  updateQuizData: (data: Partial<QuizData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  totalSteps: number;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStepInternal] = useState(1);
  const [quizData, setQuizData] = useState<QuizData>({});
  const totalSteps = 35; // Ajustar conforme necessário

  // Scroll to top whenever step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const setCurrentStep = (step: number) => {
    setCurrentStepInternal(step);
  };

  const updateQuizData = (data: Partial<QuizData>) => {
    setQuizData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    setCurrentStepInternal(prev => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setCurrentStepInternal(prev => Math.max(prev - 1, 1));
  };

  return (
    <QuizContext.Provider value={{
      currentStep,
      quizData,
      setCurrentStep,
      updateQuizData,
      nextStep,
      prevStep,
      totalSteps
    }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}
