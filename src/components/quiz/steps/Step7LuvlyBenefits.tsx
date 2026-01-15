import { motion } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { ContinueButton } from '../shared/ContinueButton';

const benefits = [
  {
    emoji: '👩',
    title: 'Treinos faciais diários focados nos seus objetivos',
  },
  {
    emoji: '📋',
    title: 'Recomendações de produtos skincare para sua pele e problemas',
  },
  {
    emoji: '💄',
    title: 'Scanner de cosméticos',
  },
];

export function Step7LuvlyBenefits() {
  const { nextStep } = useQuiz();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader showBack />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
              Com Luvya todo <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">rosto envelhece</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">graciosamente</span>
            </h2>
            
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 mx-4 border border-pink-100 shadow-sm">
              <p className="text-gray-700 font-medium">
                Veja como vamos ajudá-la a alcançar seus objetivos:
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="flex items-start gap-5 p-5 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center group-hover:from-pink-200 group-hover:to-rose-200 transition-all duration-300">
                    <span className="text-3xl">{benefit.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-semibold text-lg leading-relaxed">
                      {benefit.title}
                    </p>
                    {index !== benefits.length - 1 && (
                      <div className="mt-4 pt-4 border-t border-gray-100"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200">
              <span className="text-pink-600 font-medium">
                Tudo isso em um só lugar!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <ContinueButton onClick={nextStep} label="Continuar" />
    </div>
  );
}