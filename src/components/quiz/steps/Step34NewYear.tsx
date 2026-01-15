import { motion } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';

export function Step34NewYear() {
  const { nextStep } = useQuiz();

  const handleContinue = () => {
    // Redireciona para o checkout
    window.location.href = 'https://go.perfectpay.com.br/PPU38CQ6429';
  };

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
          className="text-center w-full max-w-md mx-auto flex flex-col items-center justify-center"
        >
          {/* Frases acima da imagem */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">
              Sua oferta
            </h1>
            <h2 className="text-3xl font-bold text-white">
              está pronta!
            </h2>
          </div>

          {/* Gift box with glow - Centralizado verticalmente */}
          <div className="relative my-8 flex-1 flex items-center justify-center">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl transform scale-150" />
            <motion.img
              src="/presente.png"
              alt="Presente"
              className="w-48 h-48 relative z-10 object-contain"
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

          {/* Botão abaixo da imagem */}
          <div className="mt-8 w-full px-4">
            <button
              onClick={handleContinue}
              className="w-full py-4 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-colors shadow-lg"
            >
              Continuar
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}