import { motion } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';

const options = [
  { label: 'Sim, tenho rotina matinal e noturna', value: 'both' },
  { label: 'Apenas rotina matinal', value: 'morning' },
  { label: 'Apenas rotina noturna', value: 'evening' },
  { label: 'Não, não tenho nenhuma rotina', value: 'none' },
];

export function Step9SkinRoutine() {
  const { updateQuizData, nextStep } = useQuiz();

  const handleSelect = (value: string) => {
    updateQuizData({ skinRoutine: value });
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
              Rotina de cuidados com a pele
            </h1>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 mx-4 border border-pink-100 shadow-sm">
              <p className="text-gray-700 font-medium">
                Você tem uma rotina diária de cuidados com a pele?
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className="w-full p-5 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-left group relative overflow-hidden"
              >
                {/* Sombra rosa sutil no fundo */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Texto */}
                <div className="relative z-10">
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