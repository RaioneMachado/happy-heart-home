import { useQuiz } from '@/contexts/QuizContext';
import { ContinueButton } from '../shared/ContinueButton';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import drOlgaImage from '@/assets/dr-olga-skydan.png';

export function Step14DrOlga() {
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
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mb-8"
        >
          {/* Efeito de brilho atrás da imagem */}
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-300/20 to-rose-300/20 rounded-full blur-3xl transform scale-150 -z-10" />
          
          <div className="relative">
            <img
              src={drOlgaImage}
              alt="Dra. Olga Skydan"
              className="w-72 h-96 object-cover rounded-t-full border-4 border-white shadow-2xl"
            />
            
            {/* Card com nome e verificação */}
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl min-w-[200px]">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="font-bold text-gray-800 text-lg">Dra. Olga Skydan</span>
                <BadgeCheck className="w-6 h-6 text-rose-500 fill-rose-100" />
              </div>
              <p className="text-sm text-gray-600 text-center">Cosmetologista certificada</p>
            </div>
            
            {/* Assinatura */}
            <div className="absolute bottom-8 right-8 text-right">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                <p className="text-sm text-gray-700 italic font-serif">Dra. Olga Skydan</p>
                <div className="w-24 h-8 mt-1">
                  <svg viewBox="0 0 100 30" className="w-full h-full">
                    <path 
                      d="M5 20 Q 20 5, 40 15 T 70 12 T 95 18" 
                      stroke="currentColor" 
                      fill="none" 
                      strokeWidth="2"
                      className="text-rose-400"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center max-w-md px-4"
        >
          <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 border border-pink-100 shadow-lg mb-6">
            <p className="text-xl font-bold text-gray-800 leading-relaxed">
              Luvya foi criado em colaboração com
              especialistas em beleza certificados,
              esteticistas e coaches de bem-estar
            </p>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200">
            <BadgeCheck className="w-5 h-5 text-rose-500" />
            <span className="text-rose-700 font-medium text-sm">
              Credibilidade e expertise garantidas
            </span>
          </div>
        </motion.div>
      </div>
      
      <div className="p-6">
        <ContinueButton 
          onClick={nextStep} 
          label="Continuar"
          className="shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>
    </div>
  );
}