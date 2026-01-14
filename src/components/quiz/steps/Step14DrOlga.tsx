import { useQuiz } from '@/contexts/QuizContext';
import { ContinueButton } from '../shared/ContinueButton';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import drOlgaImage from '@/assets/dr-olga-skydan.png';

export function Step14DrOlga() {
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
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative mb-6"
        >
          <img
            src={drOlgaImage}
            alt="Dra. Olga Skydan"
            className="w-64 h-80 object-cover rounded-t-full"
          />
          
          {/* Card com nome e verificação */}
          <div className="absolute bottom-20 left-0 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-foreground">Dra. Olga Skydan</span>
              <BadgeCheck className="w-5 h-5 text-primary fill-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Cosmetologista certificada</p>
          </div>
          
          {/* Assinatura */}
          <div className="absolute bottom-4 right-4 text-right">
            <p className="text-sm text-muted-foreground italic font-serif">Dra. Olga Skydan</p>
            <div className="w-20 h-8 mt-1">
              <svg viewBox="0 0 100 30" className="w-full h-full">
                <path 
                  d="M5 20 Q 20 5, 40 15 T 70 12 T 95 18" 
                  stroke="currentColor" 
                  fill="none" 
                  strokeWidth="1.5"
                  className="text-foreground/60"
                />
              </svg>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center max-w-md"
        >
          <p className="text-lg font-bold text-foreground">
            Luvya foi criado em colaboração com
            especialistas em beleza certificados,
            esteticistas e coaches de bem-estar
          </p>
        </motion.div>
      </div>
      
      <ContinueButton onClick={nextStep} />
    </div>
  );
}