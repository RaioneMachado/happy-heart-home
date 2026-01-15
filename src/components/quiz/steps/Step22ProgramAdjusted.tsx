import { useQuiz } from '@/contexts/QuizContext';
import { ContinueButton } from '../shared/ContinueButton';
import { QuizHeader } from '../shared/QuizHeader';
import { motion } from 'framer-motion';

export function Step22ProgramAdjusted() {
  const { nextStep } = useQuiz();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 flex flex-col">
      <QuizHeader showBack showProgress={false} />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 px-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Agora seu programa está
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">ajustado</span> ao seu tipo de pele
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            e preocupações
          </h3>
        </motion.div>
        
        {/* Chart Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 shadow-xl max-w-sm w-full mx-4 border border-pink-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1">
              <span className="text-sm font-semibold text-gray-700">
                Minimizando aparência cansada
              </span>
            </div>
            <div className="flex items-center gap-1 bg-gradient-to-r from-pink-100 to-rose-100 px-3 py-1 rounded-full">
              <span className="text-pink-600 font-bold">2x 🎉</span>
              <span className="text-xs text-pink-500 font-medium">mais eficaz</span>
            </div>
          </div>
          
          <div className="flex items-end justify-center gap-10 h-48 mb-4">
            {/* Por conta própria */}
            <div className="flex flex-col items-center">
              <div className="text-center mb-2">
                <span className="text-xs font-semibold text-gray-500">
                  POR CONTA
                  <br />
                  PRÓPRIA
                </span>
              </div>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 80 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="w-16 bg-gradient-to-t from-gray-200 to-gray-300 rounded-t-lg relative overflow-hidden"
              >
                {/* Efeito de textura no gráfico */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-1 bg-gray-400 mb-1"></div>
                  <div className="w-full h-1 bg-gray-400 mb-1"></div>
                  <div className="w-full h-1 bg-gray-400"></div>
                </div>
              </motion.div>
              <div className="mt-2">
                <span className="text-xs text-gray-500">Baixa eficácia</span>
              </div>
            </div>
            
            {/* Com Luvya */}
            <div className="flex flex-col items-center">
              <div className="text-center mb-2">
                <span className="text-xs font-bold text-pink-600">
                  COM
                  <br />
                  •Luvya
                </span>
              </div>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 160 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                className="w-16 bg-gradient-to-t from-pink-500 to-rose-500 rounded-t-lg relative overflow-hidden shadow-lg"
              >
                {/* Efeito de brilho no gráfico */}
                <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white/30 to-transparent"></div>
                {/* Efeito de ondas na água */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white/20 to-transparent"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
              </motion.div>
              <div className="mt-2">
                <span className="text-xs font-semibold text-pink-600">Alta eficácia</span>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-pink-100">
            <p className="text-xs text-gray-500 text-center">
              <span className="font-semibold">Baseado em um estudo de 12 semanas</span> com usuários ativos do Luvya.
              <br />
              Resultados podem variar individualmente.
            </p>
          </div>
        </motion.div>

        {/* Badge de confiança */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200">
            <span className="text-rose-700 font-medium text-sm">
              ✓ Personalizado para suas necessidades específicas
            </span>
          </div>
        </motion.div>
      </div>
      
      <div className="p-6">
        <ContinueButton 
          onClick={nextStep} 
          label="Ver meu plano personalizado"
          className="shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>
    </div>
  );
}