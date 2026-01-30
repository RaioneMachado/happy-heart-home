import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizLayout } from '../QuizLayout';

// URLS públicas das imagens - ajuste conforme sua estrutura
const IMAGES = {
  woman3039: '/assets/woman-30-39.jpg',
  woman4049: '/assets/woman-40-49.jpg',
  woman5059: '/assets/woman-50-59.jpg',
  woman60plus: '/assets/woman-60-plus.jpg',
} as const;

const ageOptions = [
  { label: 'Idade: 30-39', value: '30-39', image: IMAGES.woman3039 },
  { label: 'Idade: 40-49', value: '40-49', image: IMAGES.woman4049 },
  { label: 'Idade: 50-59', value: '50-59', image: IMAGES.woman5059 },
  { label: 'Idade: 60+', value: '60+', image: IMAGES.woman60plus },
];

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
          transition={{ duration: 0.4 }}
          className="text-center mb-8 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Pareça mais jovem sem botox
            </span>
            <br />
            com plano de yoga facial personalizado
          </h2>
          <p className="text-lg text-muted-foreground mt-6">
            SELECIONE SUA <span className="font-bold text-foreground">IDADE</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 max-w-md w-full">
          {ageOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={option.image} 
                  alt={option.label}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-full px-4 py-2 flex items-center justify-between text-white font-medium shadow-lg">
                  <span>{option.label}</span>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </QuizLayout>
  );
}
