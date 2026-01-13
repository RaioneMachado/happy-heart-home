import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { motion } from 'framer-motion';

// Face shape types
const faceShapes = [
  { value: 'oval', highlight: 'cheeks' },
  { value: 'round', highlight: 'full' },
  { value: 'square', highlight: 'jaw' },
  { value: 'heart', highlight: 'forehead' },
  { value: 'oblong', highlight: 'chin' },
  { value: 'diamond', highlight: 'cheekbones' },
];

function FaceShapeIcon({ highlight, selected }: { highlight: string; selected: boolean }) {
  return (
    <svg viewBox="0 0 60 80" className="w-full h-full">
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
        stroke={selected ? 'hsl(14, 100%, 57%)' : '#E8D4C4'}
        strokeWidth="1"
      />
      
      {/* Highlight zones based on face shape */}
      {highlight === 'cheeks' && (
        <>
          <circle cx="20" cy="45" r="4" fill="none" stroke="#FF6B6B" strokeWidth="1.5" strokeDasharray="2,2" />
          <circle cx="40" cy="45" r="4" fill="none" stroke="#FF6B6B" strokeWidth="1.5" strokeDasharray="2,2" />
        </>
      )}
      {highlight === 'full' && (
        <ellipse cx="30" cy="48" rx="12" ry="8" fill="none" stroke="#FF6B6B" strokeWidth="1.5" strokeDasharray="2,2" />
      )}
      {highlight === 'jaw' && (
        <path d="M15 55 Q30 70 45 55" fill="none" stroke="#FF6B6B" strokeWidth="1.5" strokeDasharray="2,2" />
      )}
      {highlight === 'forehead' && (
        <path d="M15 30 Q30 25 45 30" fill="none" stroke="#FF6B6B" strokeWidth="1.5" strokeDasharray="2,2" />
      )}
      {highlight === 'chin' && (
        <circle cx="30" cy="65" r="5" fill="none" stroke="#FF6B6B" strokeWidth="1.5" strokeDasharray="2,2" />
      )}
      {highlight === 'cheekbones' && (
        <>
          <line x1="15" y1="40" x2="22" y2="45" stroke="#FF6B6B" strokeWidth="1.5" strokeDasharray="2,2" />
          <line x1="45" y1="40" x2="38" y2="45" stroke="#FF6B6B" strokeWidth="1.5" strokeDasharray="2,2" />
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
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <QuizHeader currentProgressStep={3} />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-foreground">
            Qual é o <span className="text-primary">formato do seu rosto</span>?
          </h2>
          <p className="text-muted-foreground mt-2">
            Selecione o mais relevante
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-3 max-w-md w-full">
          {faceShapes.map((shape, index) => (
            <motion.button
              key={shape.value}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleSelect(shape.value)}
              className="bg-card rounded-2xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-2"
            >
              <div className="w-16 h-20">
                <FaceShapeIcon highlight={shape.highlight} selected={false} />
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-border" />
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
