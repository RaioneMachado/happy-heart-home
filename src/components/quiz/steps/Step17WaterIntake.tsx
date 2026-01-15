import { useState } from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { ContinueButton } from '../shared/ContinueButton';
import { motion } from 'framer-motion';

function WaterGlass({ filled, onClick, index }: { filled: boolean; onClick: () => void; index: number }) {
  return (
    <button
      onClick={onClick}
      className="w-12 h-16 relative group focus:outline-none"
    >
      {/* Copo */}
      <svg viewBox="0 0 40 55" className="w-full h-full transition-transform duration-300 group-hover:scale-105">
        {/* Contorno do copo */}
        <path
          d="M5 5 L8 50 Q10 53 20 53 Q30 53 32 50 L35 5 Z"
          fill={filled ? 'url(#waterGradient)' : 'transparent'}
          stroke={filled ? 'hsl(200, 80%, 60%)' : 'hsl(200, 30%, 85%)'}
          strokeWidth="1.5"
          className="transition-all duration-300"
        />
        
        {/* Gradiente para água */}
        <defs>
          <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(200, 90%, 75%)" />
            <stop offset="100%" stopColor="hsl(200, 90%, 60%)" />
          </linearGradient>
        </defs>
        
        {/* Água com animação */}
        {filled && (
          <motion.path
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            d="M7 12 L9 48 Q10 51 20 51 Q30 51 31 48 L33 12 Q20 18 7 12 Z"
            fill="url(#waterGradient)"
            style={{ transformOrigin: 'bottom' }}
          />
        )}
        
        {/* Borda superior */}
        <ellipse
          cx="20"
          cy="5"
          rx="15"
          ry="3"
          fill={filled ? 'hsl(200, 90%, 88%)' : 'white'}
          stroke={filled ? 'hsl(200, 80%, 60%)' : 'hsl(200, 30%, 85%)'}
          strokeWidth="1.5"
        />
        
        {/* Base */}
        <ellipse
          cx="20"
          cy="53"
          rx="12"
          ry="2"
          fill={filled ? 'hsl(200, 80%, 60%)' : 'hsl(200, 30%, 85%)'}
          opacity="0.8"
        />
        
        {/* Gotas de água saindo se preenchido */}
        {filled && (
          <motion.g
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: [0, 1, 0], y: [-5, 5, 10] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.1 }}
          >
            <circle cx="20" cy="2" r="1" fill="hsl(200, 90%, 75%)" />
          </motion.g>
        )}
        
        {/* Plus icon se não preenchido */}
        {!filled && (
          <g className="opacity-40 group-hover:opacity-60 transition-opacity duration-300">
            <line x1="20" y1="22" x2="20" y2="38" stroke="hsl(200, 50%, 50%)" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="30" x2="28" y2="30" stroke="hsl(200, 50%, 50%)" strokeWidth="2" strokeLinecap="round" />
          </g>
        )}
      </svg>
    </button>
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
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader showBack showProgress />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 w-full max-w-md"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
            Consumo diário de água
          </h1>
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 mx-4 border border-pink-100 shadow-sm">
            <p className="text-gray-700 font-medium">
              Quantos copos de água você bebe por dia?
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-5 gap-4 max-w-xs mb-8">
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6"
          >
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full px-6 py-3 shadow-md">
              <p className="text-lg font-bold text-blue-700">
                {glassCount} {glassCount === 1 ? 'copo' : 'copos'} selecionado{glassCount !== 1 ? 's' : ''}
              </p>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center max-w-sm px-4"
        >
          <p className="text-gray-600 text-sm">
            Clique nos copos para selecionar quantos você bebe por dia
          </p>
        </motion.div>
      </div>
      
      <ContinueButton 
        onClick={handleNext} 
        disabled={glassCount === 0}
        label="Próximo"
      />
    </div>
  );
}