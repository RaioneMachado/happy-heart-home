import { useState } from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { ContinueButton } from '../shared/ContinueButton';
import { motion } from 'framer-motion';

function WaterGlass({ filled, onClick, index }: { filled: boolean; onClick: () => void; index: number }) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      className="w-12 h-16 relative group"
    >
      {/* Copo */}
      <svg viewBox="0 0 40 55" className="w-full h-full">
        {/* Contorno do copo */}
        <path
          d="M5 5 L8 50 Q10 53 20 53 Q30 53 32 50 L35 5 Z"
          fill={filled ? 'hsl(195, 90%, 85%)' : 'transparent'}
          stroke={filled ? 'hsl(195, 80%, 70%)' : 'hsl(14, 80%, 75%)'}
          strokeWidth="1.5"
          className="transition-all duration-300"
        />
        
        {/* Água */}
        {filled && (
          <motion.path
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.3 }}
            d="M7 12 L9 48 Q10 51 20 51 Q30 51 31 48 L33 12 Q20 18 7 12 Z"
            fill="hsl(195, 85%, 65%)"
            style={{ transformOrigin: 'bottom' }}
          />
        )}
        
        {/* Borda superior */}
        <ellipse
          cx="20"
          cy="5"
          rx="15"
          ry="3"
          fill={filled ? 'hsl(195, 90%, 88%)' : 'white'}
          stroke={filled ? 'hsl(195, 80%, 70%)' : 'hsl(14, 80%, 75%)'}
          strokeWidth="1.5"
        />
        
        {/* Base */}
        <ellipse
          cx="20"
          cy="53"
          rx="12"
          ry="2"
          fill={filled ? 'hsl(195, 80%, 70%)' : 'hsl(14, 80%, 75%)'}
          opacity="0.5"
        />
        
        {/* Plus icon se não preenchido */}
        {!filled && (
          <g className="opacity-60">
            <line x1="20" y1="22" x2="20" y2="38" stroke="hsl(14, 80%, 65%)" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="30" x2="28" y2="30" stroke="hsl(14, 80%, 65%)" strokeWidth="2" strokeLinecap="round" />
          </g>
        )}
      </svg>
    </motion.button>
  );
}

export function Step17WaterIntake() {
  const { updateQuizData, nextStep } = useQuiz();
  const [glassCount, setGlassCount] = useState(0);

  const handleGlassClick = (index: number) => {
    // Se clicou no mesmo ou menor, reseta até esse ponto
    if (index + 1 <= glassCount) {
      setGlassCount(index);
    } else {
      // Preenche até o copo clicado
      setGlassCount(index + 1);
    }
  };

  const handleNext = () => {
    updateQuizData({ waterIntake: glassCount });
    nextStep();
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <QuizHeader currentProgressStep={2} />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Consumo diário de água
          </h2>
          <p className="text-muted-foreground">
            Quantos copos de água você bebe por dia?
          </p>
        </motion.div>

        <div className="grid grid-cols-5 gap-3 max-w-xs">
          {Array.from({ length: 10 }).map((_, index) => (
            <WaterGlass
              key={index}
              index={index}
              filled={index < glassCount}
              onClick={() => handleGlassClick(index)}
            />
          ))}
        </div>
        
        {glassCount > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-lg font-medium text-foreground"
          >
            {glassCount} {glassCount === 1 ? 'copo' : 'copos'}
          </motion.p>
        )}
      </div>
      
      <ContinueButton 
        onClick={handleNext} 
        disabled={glassCount === 0}
        label="Próximo"
      />
    </div>
  );
}
