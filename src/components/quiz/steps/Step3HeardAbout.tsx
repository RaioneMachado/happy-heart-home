import { motion } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';

const options = [
  { label: 'Não tenho certeza', value: 'not-sure' },
  { label: 'Sei algumas coisas', value: 'know-few' },
  { label: 'Sim, sei tudo sobre isso', value: 'know-all' },
];

export function Step3HeardAbout() {
  const { updateQuizData, nextStep } = useQuiz();

  const handleSelect = (value: string) => {
    updateQuizData({ heardAboutFaceYoga: value });
    nextStep();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader showBack />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-center text-foreground mb-8">
            Você já ouviu falar sobre
            <br />
            Yoga Facial antes?
          </h1>

          <div className="space-y-4">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className="w-full p-5 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-left group relative overflow-hidden border border-gray-100 hover:border-pink-200"
              >
                {/* Sombra rosa mais visível no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Texto */}
                <div className="relative z-10">
                  <span className="font-semibold text-lg text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {option.label}
                  </span>
                </div>

                {/* Seta indicativa - só aparece no hover */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg 
                    className="w-5 h-5 text-pink-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Sombra rosa externa no hover */}
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_0_0_rgba(236,72,153,0)] group-hover:shadow-[0_0_0_3px_rgba(236,72,153,0.1)] transition-all duration-300"></div>
              </button>
            ))}
          </div>

          {/* Instrução visual no rodapé */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-100">
              <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></div>
              <span className="text-sm text-pink-700 font-medium">
                Selecione uma opção para continuar
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
