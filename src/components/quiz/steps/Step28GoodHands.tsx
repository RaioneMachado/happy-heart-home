import { useQuiz } from '@/contexts/QuizContext';
import { ContinueButton } from '../shared/ContinueButton';
import { motion } from 'framer-motion';
import worldMapImage from '@/assets/world-map.png';

export function Step28GoodHands() {
  const { nextStep, quizData } = useQuiz();

  // Dynamic text based on user data
  const genderText = quizData.gender === 'male' ? 'homens' : 'mulheres';
  const ageText = quizData.age ? `na faixa dos ${quizData.age?.split('-')[0]}` : '';

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 px-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Você está em
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold">
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              boas mãos
            </span>
          </h3>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative mb-8 max-w-md w-full mx-4"
        >
          {/* Efeito de brilho atrás do mapa */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-300/20 to-rose-300/20 rounded-full blur-3xl transform scale-150 -z-10" />
          
          <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-4 border border-pink-100 shadow-xl">
            <img
              src={worldMapImage}
              alt="Mapa mundial com usuários Luvya"
              className="w-full h-auto rounded-lg"
            />
            
            {/* Badge sobre o mapa */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="font-bold text-sm">🌎 Global</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center max-w-sm px-4"
        >
          <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 border border-pink-100 shadow-lg mb-6">
            <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
              <span className="text-4xl font-black text-rose-600">400k+</span> {genderText} {ageText}
              <br />
              avançaram em direção aos seus
              <br />
              objetivos com o <span className="text-primary font-bold">Luvya</span>
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto mb-6">
            {['🇧🇷 Brasil', '🇺🇸 EUA', '🇪🇸 Espanha', '🇫🇷 França', '🇯🇵 Japão', '🇦🇺 Austrália'].map((country, index) => (
              <motion.div
                key={country}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + (index * 0.1) }}
                className="bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100"
              >
                <p className="text-xs font-medium text-gray-700">{country}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200">
            <span className="text-rose-700 font-medium text-sm">
              Junte-se à nossa comunidade global
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