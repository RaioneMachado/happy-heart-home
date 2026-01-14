import { useQuiz } from '@/contexts/QuizContext';
import { ContinueButton } from '../shared/ContinueButton';
import { motion } from 'framer-motion';
import worldMapImage from '@/assets/world-map.png';

export function Step28GoodHands() {
  const { nextStep, quizData } = useQuiz();

  // Dynamic text based on user data
  const genderText = quizData.gender === 'male' ? 'homens' : 'mulheres';
  const ageText = quizData.age ? `na faixa dos ${quizData.age?.split('-')[0]}` : '';

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <header className="w-full bg-background sticky top-0 z-50">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-center">
          <h1 className="text-2xl font-semibold tracking-tight text-primary">•Luvya</h1>
        </div>
        <div className="w-full h-px bg-border" />
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 pb-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-foreground text-center mb-8"
        >
          Você está em boas mãos
        </motion.h2>
        
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          src={worldMapImage}
          alt="Mapa mundial"
          className="w-full max-w-md mb-8"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg font-bold text-foreground text-center max-w-sm"
        >
          400k+ {genderText} {ageText}
          <br />
          avançaram em direção aos seus
          <br />
          objetivos com o Luvya
        </motion.p>
      </div>
      
      <ContinueButton onClick={nextStep} label="Próximo" />
    </div>
  );
}