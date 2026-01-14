import { useQuiz } from '@/contexts/QuizContext';
import { ContinueButton } from '../shared/ContinueButton';
import { motion } from 'framer-motion';
import yogaWomanIllustration from '@/assets/yoga-woman-illustration.png';

export function Step12ProgramSmarter() {
  const { nextStep } = useQuiz();

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <header className="w-full bg-background sticky top-0 z-50">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-center">
          <h1 className="text-2xl font-semibold tracking-tight text-primary">•Luvya</h1>
        </div>
        <div className="w-full h-px bg-border" />
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 pb-32">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          src={yogaWomanIllustration}
          alt="Yoga facial"
          className="w-64 h-64 object-contain mb-8"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center max-w-md"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Seu programa ficou mais
            <br />
            inteligente sobre você!
          </h2>
          <p className="text-muted-foreground">
            Seu plano personalizado é atualizado diariamente,
            adaptando os exercícios ao seu progresso e necessidades
          </p>
        </motion.div>
      </div>
      
      <ContinueButton onClick={nextStep} />
    </div>
  );
}