import { motion } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { ContinueButton } from '../shared/ContinueButton';
import harvardLogo from '@/assets/harvard-logo.png';
import northwesternLogo from '@/assets/northwestern-logo.png';

export function Step30Science() {
  const { nextStep } = useQuiz();

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
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
              Reverta suas rugas com
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                ciência e autocuidado
              </span>
            </h2>
          </div>

          {/* Graph Card */}
          <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 mb-8 border border-pink-100 shadow-lg">
            <div className="relative">
              {/* Graph Container */}
              <div className="relative h-48">
                {/* Y axis */}
                <div className="absolute left-8 top-0 bottom-8 w-px bg-gray-300"></div>
                {/* X axis */}
                <div className="absolute left-8 right-8 bottom-8 h-px bg-gray-300"></div>
                
                {/* Data points */}
                <div className="absolute inset-0 flex items-end">
                  {/* SEM YOGA FACIAL - declining line */}
                  <div className="absolute left-1/4 -translate-x-1/2 bottom-8 w-32 h-20 border-l-2 border-t-2 border-r-2 border-dashed border-rose-400 rounded-t-lg">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-center">
                      <span className="text-xs font-bold text-rose-600 bg-rose-100 px-2 py-1 rounded-full">
                        SEM YOGA FACIAL
                      </span>
                    </div>
                  </div>
                  
                  {/* COM YOGA FACIAL - improving line */}
                  <div className="absolute right-1/4 -translate-x-1/2 bottom-8 w-32 h-32 border-l-2 border-t-2 border-r-2 border-solid border-green-400 rounded-t-lg bg-gradient-to-t from-green-100/30 to-transparent">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-center">
                      <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        COM YOGA FACIAL
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Labels */}
                <div className="absolute left-8 right-8 bottom-0 flex justify-between">
                  <span className="text-xs text-gray-500">Início</span>
                  <span className="text-xs text-gray-500">Tempo →</span>
                  <span className="text-xs text-gray-500">20 semanas</span>
                </div>
                
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-8">
                  <span className="text-xs text-gray-500 rotate-90 -translate-x-4">Melhoria da pele</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                <span className="font-bold text-green-600">+47% melhoria</span> na aparência da pele após 20 semanas
              </p>
            </div>
          </div>

          {/* Harvard reference */}
          <div className="group mb-6">
            <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 flex items-start gap-4 border border-pink-100 group-hover:border-pink-200">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-pink-200 p-1 bg-white">
                  <img src={harvardLogo} alt="Harvard" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 mb-2">Harvard Medical School</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Relata que exercícios faciais também ajudam a melhorar o tônus muscular no rosto e podem ajudar com 
                  perda de gordura relacionada à gravidade ou redistribuição no rosto.
                </p>
                <div className="flex items-center gap-1 mt-3">
                  <span className="text-xs font-medium text-rose-600 bg-rose-100 px-2 py-1 rounded-full">
                    Estudo revisado por pares
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Northwestern reference */}
          <div className="group">
            <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 flex items-start gap-4 border border-pink-100 group-hover:border-pink-200">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-pink-200 p-1 bg-white">
                  <img src={northwesternLogo} alt="Northwestern" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 mb-2">Northwestern University</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Dermatologistas relatam que yoga facial comprovadamente faz você parecer 
                  <span className="font-bold text-green-600"> 3 anos mais jovem em 20 semanas</span>.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    Resultado comprovado
                  </span>
                  <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                    Estudo clínico
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Scientific badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200">
              <span className="text-rose-700 font-medium text-sm">
                🧪 Baseado em evidências científicas
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <ContinueButton 
        onClick={nextStep} 
        label="Continuar para resultados"
        className="shadow-lg hover:shadow-xl transition-shadow duration-300"
      />
    </div>
  );
}