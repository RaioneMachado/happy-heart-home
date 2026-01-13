import { AnimatePresence } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';
import { Step1Age } from './steps/Step1Age';
import { Step11SunSafety } from './steps/Step11SunSafety';
import { Step12ProgramSmarter } from './steps/Step12ProgramSmarter';
import { Step13Aesthetician } from './steps/Step13Aesthetician';
import { Step14DrOlga } from './steps/Step14DrOlga';
import { Step15Diets } from './steps/Step15Diets';
import { Step16Sugar } from './steps/Step16Sugar';
import { Step17WaterIntake } from './steps/Step17WaterIntake';
import { Step18Gender } from './steps/Step18Gender';
import { Step19Loading } from './steps/Step19Loading';
import { Step20SkinType } from './steps/Step20SkinType';
import { Step21SkinConcerns } from './steps/Step21SkinConcerns';
import { Step22ProgramAdjusted } from './steps/Step22ProgramAdjusted';
import { Step23FaceShape } from './steps/Step23FaceShape';
import { Step24MenstrualCycle } from './steps/Step24MenstrualCycle';
import { Step25MentalHealth } from './steps/Step25MentalHealth';
import { Step26TimeSpend } from './steps/Step26TimeSpend';
import { Step27Interests } from './steps/Step27Interests';
import { Step28GoodHands } from './steps/Step28GoodHands';
import { Step29Experts } from './steps/Step29Experts';

export function QuizContainer() {
  const { currentStep } = useQuiz();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Age />;
      // Etapas 2-10 serão adicionadas quando as imagens forem enviadas
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        // Placeholder - avança para step 11 por enquanto
        return <Step11SunSafety />;
      case 11:
        return <Step11SunSafety />;
      case 12:
        return <Step12ProgramSmarter />;
      case 13:
        return <Step13Aesthetician />;
      case 14:
        return <Step14DrOlga />;
      case 15:
        return <Step15Diets />;
      case 16:
        return <Step16Sugar />;
      case 17:
        return <Step17WaterIntake />;
      case 18:
        return <Step18Gender />;
      case 19:
        return <Step19Loading />;
      case 20:
        return <Step20SkinType />;
      case 21:
        return <Step21SkinConcerns />;
      case 22:
        return <Step22ProgramAdjusted />;
      case 23:
        return <Step23FaceShape />;
      case 24:
        return <Step24MenstrualCycle />;
      case 25:
        return <Step25MentalHealth />;
      case 26:
        return <Step26TimeSpend />;
      case 27:
        return <Step27Interests />;
      case 28:
        return <Step28GoodHands />;
      case 29:
        return <Step29Experts />;
      // Etapas 30+ serão adicionadas
      default:
        return <Step1Age />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <div key={currentStep}>
        {renderStep()}
      </div>
    </AnimatePresence>
  );
}
