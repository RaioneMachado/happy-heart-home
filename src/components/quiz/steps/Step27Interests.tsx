import { useState } from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { ContinueButton } from '../shared/ContinueButton';
import { motion } from 'framer-motion';
import trackProgressImg from '@/assets/interest-track-progress.png';
import checkProductsImg from '@/assets/interest-check-products.png';
import beautyRoutineImg from '@/assets/interest-beauty-routine.png';
import bodyCareImg from '@/assets/interest-body-care.png';
import hairCareImg from '@/assets/interest-hair-care.png';
import relaxationImg from '@/assets/interest-relaxation.png';

const options = [
  { 
    label: 'Acompanhar o progresso da minha pele ao longo do tempo', 
    value: 'track_progress',
    image: trackProgressImg
  },
  { 
    label: 'Verificar se o produto não é prejudicial', 
    value: 'check_products',
    image: checkProductsImg
  },
  { 
    label: 'Montar uma rotina de beleza', 
    value: 'beauty_routine',
    image: beautyRoutineImg
  },
  { 
    label: 'Cuidados corporais', 
    value: 'body_care',
    image: bodyCareImg
  },
  { 
    label: 'Cuidados com os cabelos', 
    value: 'hair_care',
    image: hairCareImg
  },
  { 
    label: 'Rituais de relaxamento', 
    value: 'relaxation',
    image: relaxationImg
  },
];

export function Step27Interests() {
  const { updateQuizData, nextStep } = useQuiz();
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (value: string) => {
    setSelected(prev => {
      if (prev.includes(value)) {
        return prev.filter(v => v !== value);
      }
      return [...prev, value];
    });
  };

  const handleNext = () => {
    updateQuizData({ interests: selected });
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
            <h1 className="text-xl md:text-2xl font-bold text-center text-foreground mb-3">
              Além dos treinos de Yoga Facial
              <br />
              no seu plano, o que mais
              <br />
              te <span className="text-primary">interessa</span>?
            </h1>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 mx-4 border border-pink-100 shadow-sm">
              <p className="text-gray-700 font-medium">
                Selecione todos os tópicos do seu interesse
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-md w-full mb-6">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleToggle(option.value)}
                className="group relative rounded-2xl overflow-hidden h-36 md:h-40 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none"
              >
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 group-hover:from-black/80 group-hover:via-black/50 transition-all duration-300 z-10" />
                
                {/* Efeito de seleção */}
                {selected.includes(option.value) && (
                  <div className="absolute inset-0 border-4 border-pink-500 z-30 rounded-2xl pointer-events-none" />
                )}
                
                {/* Imagem */}
                <img 
                  src={option.image} 
                  alt={option.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Checkbox de seleção */}
                <div className={`absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center z-20 transition-all duration-300 ${
                  selected.includes(option.value)
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 shadow-lg'
                    : 'bg-white/20 backdrop-blur-sm border border-white/30 group-hover:bg-white/30'
                }`}>
                  {selected.includes(option.value) ? (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-white/50 group-hover:bg-white/70 transition-colors duration-300" />
                  )}
                </div>
                
                {/* Texto */}
                <div className="relative h-full flex flex-col justify-end p-4 z-20">
                  <span className="text-sm font-semibold text-white text-left leading-tight drop-shadow-md">
                    {option.label}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {selected.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200">
                <span className="font-bold text-pink-600">{selected.length}</span>
                <span className="text-pink-700 font-medium text-sm">
                  tópico{selected.length !== 1 ? 's' : ''} selecionado{selected.length !== 1 ? 's' : ''}
                </span>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <p className="text-gray-500 text-sm">
              Personalizaremos recomendações extras baseadas nas suas escolhas
            </p>
          </motion.div>
        </motion.div>
      </div>

      <ContinueButton 
        onClick={handleNext} 
        disabled={selected.length === 0}
        label="Continuar"
      />
    </div>
  );
}