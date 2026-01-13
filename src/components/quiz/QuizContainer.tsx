import { AnimatePresence } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';
import { Step1Age } from './steps/Step1Age';
import { Step2MainGoal } from './steps/Step2MainGoal';
import { Step3HeardAbout } from './steps/Step3HeardAbout';
import { Step4WhatIsFaceYoga } from './steps/Step4WhatIsFaceYoga';
import { Step5SkinSatisfaction } from './steps/Step5SkinSatisfaction';
import { Step6ChooseFocus } from './steps/Step6ChooseFocus';
import { Step7LuvlyBenefits } from './steps/Step7LuvlyBenefits';
import { Step8FaceAreas } from './steps/Step8FaceAreas';
import { Step9SkinRoutine } from './steps/Step9SkinRoutine';
import { Step10CareProducts } from './steps/Step10CareProducts';
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
import { Step30Science } from './steps/Step30Science';
import { Step31Loading } from './steps/Step31Loading';
import { Step32Email } from './steps/Step32Email';
import { Step33Newsletter } from './steps/Step33Newsletter';
import { Step34NewYear } from './steps/Step34NewYear';
import { Step35Pricing } from './steps/Step35Pricing';

export function QuizContainer() {
  const { currentStep } = useQuiz();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Age />;
      case 2:
        return <Step2MainGoal />;
      case 3:
        return <Step3HeardAbout />;
      case 4:
        return <Step4WhatIsFaceYoga />;
      case 5:
        return <Step5SkinSatisfaction />;
      case 6:
        return <Step6ChooseFocus />;
      case 7:
        return <Step7LuvlyBenefits />;
      case 8:
        return <Step8FaceAreas />;
      case 9:
        return <Step9SkinRoutine />;
      case 10:
        return <Step10CareProducts />;
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
      case 30:
        return <Step30Science />;
      case 31:
        return <Step31Loading />;
      case 32:
        return <Step32Email />;
      case 33:
        return <Step33Newsletter />;
      case 34:
        return <Step34NewYear />;
      case 35:
        return <Step35Pricing />;
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
