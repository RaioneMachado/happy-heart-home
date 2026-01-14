import { useQuiz } from '@/contexts/QuizContext';
import { ContinueButton } from '../shared/ContinueButton';
import { QuizHeader } from '../shared/QuizHeader';
import { motion } from 'framer-motion';

export function Step22ProgramAdjusted() {
  const { nextStep } = useQuiz();

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <QuizHeader showProgress={false} />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-foreground">
            Agora seu programa está
            <br />
            <span className="text-primary">ajustado</span> ao seu tipo de pele
            <br />
            e preocupações
          </h2>
        </motion.div>
        
        {/* Chart Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl p-6 shadow-sm max-w-sm w-full"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-muted-foreground">
              Minimizando aparência cansada
            </span>
            <span className="text-primary font-bold">2x 🎉</span>
          </div>
          
          <div className="flex items-end justify-center gap-8 h-40">
            {/* Por conta própria */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 60 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="w-20 bg-muted rounded-t-lg flex items-end justify-center pb-2"
              >
                <span className="text-xs font-bold text-muted-foreground">
                  POR CONTA
                  <br />
                  PRÓPRIA
                </span>
              </motion.div>
            </div>
            
            {/* Com Luvya */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 120 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="w-20 quiz-gradient rounded-t-lg flex items-end justify-center pb-2"
              >
                <span className="text-xs font-bold text-white">
                  COM
                  <br />
                  •Luvya
                </span>
              </motion.div>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground text-center mt-4">
            Baseado em um estudo de 12 semanas com usuários ativos do Luvya.
          </p>
        </motion.div>
      </div>
      
      <ContinueButton onClick={nextStep} label="Próximo" />
    </div>
  );
}