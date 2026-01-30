import { memo } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizLayout } from '../QuizLayout';

// Importações otimizadas
import woman3039 from '@/assets/woman-30-39.jpg';
import woman4049 from '@/assets/woman-40-49.jpg';
import woman5059 from '@/assets/woman-50-59.jpg';
import woman60plus from '@/assets/woman-60-plus.jpg';

// Componente de imagem memoizado para performance
const AgeOptionImage = memo(({ src, alt }: { src: string; alt: string }) => (
  <div className="aspect-square overflow-hidden">
    <img 
      src={src} 
      alt={alt}
      loading="lazy"
      decoding="async"
      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
    />
  </div>
));

AgeOptionImage.displayName = 'AgeOptionImage';

const ageOptions = [
  { label: '30-39', value: '30-39', image: woman3039 },
  { label: '40-49', value: '40-49', image: woman4049 },
  label: '50-59', value: '50-59', image: woman5059 },
  { label: '60+', value: '60+', image: woman60plus },
];

// Componente memoizado para botões de idade
const AgeButton = memo(({ 
  option, 
  onSelect 
}: { 
  option: typeof ageOptions[0]; 
  onSelect: (value: string) => void;
}) => (
  <button
    onClick={() => onSelect(option.value)}
    className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
    aria-label={`Selecionar idade ${option.label}`}
  >
    <AgeOptionImage src={option.image} alt={`Mulher ${option.label}`} />
    <div className="absolute bottom-3 left-3 right-3">
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-full px-4 py-2 flex items-center justify-between text-white font-medium shadow-lg">
        <span className="text-sm sm:text-base">Idade: {option.label}</span>
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  </button>
));

AgeButton.displayName = 'AgeButton';

export function Step1Age() {
  const { updateQuizData, nextStep } = useQuiz();

  const handleSelect = (age: string) => {
    updateQuizData({ age });
    nextStep();
  };

  return (
    <QuizLayout>
      <div className="flex-1 flex flex-col items-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-8 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 leading-tight">
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Pareça mais jovem sem botox
            </span>
            <br />
            com plano de yoga facial personalizado
          </h2>
          <p className="text-lg text-muted-foreground mt-4 sm:mt-6">
            SELECIONE SUA <span className="font-bold text-foreground">IDADE</span>
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md w-full"
        >
          {ageOptions.map((option) => (
            <AgeButton 
              key={option.value} 
              option={option} 
              onSelect={handleSelect}
            />
          ))}
        </motion.div>
      </div>
    </QuizLayout>
  );
}
