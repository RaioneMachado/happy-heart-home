import { QuizProvider } from '@/contexts/QuizContext';
import { QuizContainer } from '@/components/quiz/QuizContainer';

const Index = () => {
  return (
    <QuizProvider>
      <QuizContainer />
    </QuizProvider>
  );
};

export default Index;
