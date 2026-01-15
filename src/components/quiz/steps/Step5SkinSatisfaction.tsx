import { motion } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';

const options = [
  { emoji: '😍', label: 'Sim, só quero manter esse resultado para sempre', value: 'satisfied' },
  { emoji: '😊', label: 'Não muito, ainda preciso de pequenas melhorias', value: 'need-improvement' },
  { emoji: '🥺', label: 'Não, tenho muitos problemas de pele', value: 'not-satisfied' },
];

export function Step5SkinSatisfaction() {
  const { updateQuizData, nextStep } = useQuiz();

  const handleSelect = (value: string) => {
    updateQuizData({ skinSatisfaction: value });
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
          <h1 className="text-2xl font-bold text-center text-foreground mb-8">
            Você está geralmente satisfeita
            <br />
            com sua condição de pele hoje?
          </h1>

          <div className="space-y-4">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className="w-full p-5 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-4 text-left group relative overflow-hidden"
              >
                {/* Sombra rosa sutil no fundo */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Container do emoji */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-50 to-rose-50 group-hover:from-pink-100 group-hover:to-rose-100 transition-all duration-300">
                  <span className="text-3xl">{option.emoji}</span>
                </div>
                
                {/* Texto */}
                <div className="relative z-10 flex-1">
                  <span className="font-semibold text-lg text-gray-800 group-hover:text-gray-900 transition-colors duration-300 leading-relaxed">
                    {option.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}