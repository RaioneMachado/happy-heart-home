import { motion } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { ContinueButton } from '../shared/ContinueButton';
import giftBox from '@/assets/gift-box.png';

// Snowflake component
const Snowflake = ({ style }: { style: React.CSSProperties }) => (
  <motion.div
    className="absolute text-blue-200/60 pointer-events-none"
    style={style}
    initial={{ opacity: 0, y: -20 }}
    animate={{ 
      opacity: [0, 1, 1, 0],
      y: [0, 100, 200, 300],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    ❄
  </motion.div>
);

export function Step34NewYear() {
  const { nextStep } = useQuiz();

  // Generate random snowflakes
  const snowflakes = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 50}%`,
      fontSize: `${12 + Math.random() * 16}px`,
      animationDelay: `${Math.random() * 5}s`,
    },
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-700 flex flex-col relative overflow-hidden">
      <QuizHeader />
      
      {/* Snowflakes */}
      {snowflakes.map((flake) => (
        <Snowflake key={flake.id} style={flake.style} />
      ))}
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Gift box with glow */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-3xl transform scale-150" />
            <motion.img
              src={giftBox}
              alt="Present"
              className="w-48 h-48 mx-auto relative z-10"
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
            Sua oferta de Ano Novo
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
