import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

// Face shape types with labels
const faceShapes = [
  { value: 'oval', highlight: 'cheeks', label: 'Oval' },
  { value: 'round', highlight: 'full', label: 'Redondo' },
  { value: 'square', highlight: 'jaw', label: 'Quadrado' },
  { value: 'heart', highlight: 'forehead', label: 'Coração' },
  { value: 'oblong', highlight: 'chin', label: 'Oblongo' },
  { value: 'diamond', highlight: 'cheekbones', label: 'Diamante' },
];

function FaceShapeIcon({ highlight, selected }: { highlight: string; selected: boolean }) {
  return (
    <svg viewBox="0 0 60 80" className="w-full h-full transition-transform duration-300 group-hover:scale-105">
      {/* Hair */}
      <ellipse cx="30" cy="18" rx="22" ry="12" fill="#D4A574" />
      <rect x="8" y="15" width="44" height="20" fill="#D4A574" />
      
      {/* Face outline */}
      <ellipse 
        cx="30" 
        cy="45" 
        rx="20" 
        ry="28" 
        fill="#F5DEB3" 
        stroke={selected ? '#ec4899' : '#E8D4C4'}
        strokeWidth={selected ? '2.5' : '1'}
        className="transition-all duration-300"
      />
      
      {/* Highlight zones based on face shape */}
      {highlight === 'cheeks' && (
        <>
          <circle cx="20" cy="45" r="4" fill="none" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="2,2" />
          <circle cx="40" cy="45" r="4" fill="none" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="2,2" />
        </>
      )}
      {highlight === 'full' && (
        <ellipse cx="30" cy="48" rx="12" ry="8" fill="none" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="2,2" />
      )}
      {highlight === 'jaw' && (
        <path d="M15 55 Q30 70 45 55" fill="none" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="2,2" />
      )}
      {highlight === 'forehead' && (
        <path d="M15 30 Q30 25 45 30" fill="none" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="2,2" />
      )}
      {highlight === 'chin' && (
        <circle cx="30" cy="65" r="5" fill="none" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="2,2" />
      )}
      {highlight === 'cheekbones' && (
        <>
          <line x1="15" y1="40" x2="22" y2="45" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="2,2" />
          <line x1="45" y1="40" x2="38" y2="45" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="2,2" />
        </>
      )}
      
      {/* Ears */}
      <ellipse cx="10" cy="45" rx="3" ry="6" fill="#F5DEB3" />
      <ellipse cx="50" cy="45" rx="3" ry="6" fill="#F5DEB3" />
    </svg>
  );
}

export function Step23FaceShape() {
  const { updateQuizData, nextStep } = useQuiz();

  const handleSelect = (value: string) => {
    updateQuizData({ faceShape: value });
    nextStep();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader showBack showProgress />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
              Qual é o <span className="text-primary">formato do seu rosto</span>?
            </h1>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 mx-4 border border-pink-100 shadow-sm">
              <p className="text-gray-700 font-medium">
                Selecione o mais relevante
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-md w-full">
            {faceShapes.map((shape) => (
              <button
                key={shape.value}
                onClick={() => handleSelect(shape.value)}
                className="group"
              >
                <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3 border border-gray-100 group-hover:border-pink-200">
                  <div className="w-16 h-20 md:w-20 md:h-24">
                    <FaceShapeIcon highlight={shape.highlight} selected={false} />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {shape.label}
                  </span>
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 group-hover:border-pink-400 transition-colors duration-300 flex items-center justify-center">
                    <Check className="w-3 h-3 text-transparent group-hover:text-pink-500 transition-colors duration-300" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 text-sm">
              Cada formato facial responde melhor a exercícios específicos
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}