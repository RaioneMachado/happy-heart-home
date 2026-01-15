import { motion } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';

export function Step34NewYear() {
  const { nextStep } = useQuiz();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-primary/80 flex flex-col relative overflow-hidden">
      {/* Header */}
      <header className="w-full bg-transparent sticky top-0 z-50">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-center">
          <h1 className="text-2xl font-semibold tracking-tight text-white">•Luvya</h1>
        </div>
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Gift box with glow */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl transform scale-150" />
            <motion.img
              src="/presente.png"
              alt="Presente"
              className="w-48 h-48 mx-auto relative z-10 object-contain"
              animate={{ 
                y: [0, -10, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <h1 className="text-3xl font-bold text-white mb-2">
            Sua oferta
          </h1>
          <h2 className="text-3xl font-bold text-white">
            está pronta!
          </h2>
        </motion.div>
      </div>

      <div className="p-4 pb-8 relative z-10">
        <button
          onClick={nextStep}
          className="w-full max-w-md mx-auto block py-4 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-colors shadow-lg"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}