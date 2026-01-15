import { useQuiz } from '@/contexts/QuizContext';
import { ContinueButton } from '../shared/ContinueButton';
import { motion } from 'framer-motion';
import yogaWomanIllustration from '@/assets/yoga-woman-illustration.png';

export function Step12ProgramSmarter() {
  const { nextStep } = useQuiz();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 flex flex-col">
      <header className="w-full sticky top-0 z-50">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-center">
          <h1 className="text-2xl font-semibold tracking-tight text-primary">•Luvya</h1>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="relative mb-8">
          {/* Efeito de brilho atrás da imagem */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-300/20 to-rose-300/20 rounded-full blur-3xl transform scale-150" />
          
          <motion.img
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src={yogaWomanIllustration}
            alt="Yoga facial"
            className="w-72 h-72 md:w-80 md:h-80 object-contain relative z-10"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center max-w-md px-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
            Seu programa ficou mais
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              inteligente sobre você!
            </span>
          </h2>
          
          <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-5 border border-pink-100 shadow-sm mb-8">
            <p className="text-gray-700 leading-relaxed">
              Seu plano personalizado é atualizado diariamente,
              adaptando os exercícios ao seu progresso e necessidades
            </p>
          </div>
        </motion.div>
      </div>
      
      <div className="p-6">
        <ContinueButton 
          onClick={nextStep} 
          label="Ver meu plano"
          className="shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>
    </div>
  );
}