import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { motion } from 'framer-motion';

const options = [
  { label: 'Regular', value: 'regular' },
  { label: 'Irregular', value: 'irregular' },
  { label: 'Não tenho ciclo devido à idade ou condição médica', value: 'no_cycle' },
  { label: 'Não sei / Prefiro não responder', value: 'prefer_not' },
];

export function Step24MenstrualCycle() {
  const { updateQuizData, nextStep, quizData } = useQuiz();

  // Skip this step if user is male
  if (quizData.gender === 'male') {
    nextStep();
    return null;
  }

  const handleSelect = (value: string) => {
    updateQuizData({ menstrualCycle: value });
    nextStep();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader showBack showProgress={false} />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-5 border border-pink-100 shadow-sm mb-6">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
                Durante a menstruação, os níveis de
                estrogênio e progesterona podem
                afetar a condição da sua pele. Seu
                ciclo menstrual é <span className="text-rose-600">regular</span>?
              </h1>
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200">
              <span className="text-rose-700 font-medium text-sm">
                Esta informação nos ajuda a personalizar seus exercícios
              </span>
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-500 text-sm">
              Sua privacidade é importante. Esta informação é usada apenas para personalização.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}