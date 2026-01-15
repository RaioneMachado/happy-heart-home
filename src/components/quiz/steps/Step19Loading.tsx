import { useEffect, useState } from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import { motion } from 'framer-motion';

export function Step19Loading() {
  const { nextStep, quizData } = useQuiz();
  const [progress, setProgress] = useState(0);

  const genderText = quizData.gender === 'male' ? 'bonito' : 'bonita';
  const testimonialName = quizData.gender === 'male' ? 'Morice, 33 anos' : 'Maria, 35 anos';

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => nextStep(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [nextStep]);

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
            Você pode ficar {genderText} de novo!
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold">
            Você só precisa de <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">yoga facial</span>
          </h3>
        </motion.div>
        
        {/* Before/After Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl max-w-md w-full mx-4 border-4 border-white"
        >
          {/* Efeito de brilho atrás da imagem */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-300/20 to-rose-300/20 blur-3xl transform scale-150 -z-10" />
          
          <img
            src="/antesdepois.png"
            alt="Antes e depois"
            className="w-full h-auto relative z-10"
          />
          
          {/* Badge sobre a imagem */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            Transformação real
          </div>
        </motion.div>
        
        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 max-w-md w-full mx-4 shadow-lg border border-pink-100 mb-8"
        >
          <div className="flex items-start mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-white text-lg">"</span>
            </div>
            <p className="text-gray-700 italic leading-relaxed flex-1">
              Finalmente, encontrei um app que oferece os exercícios perfeitos
              para o meu problema—e funciona! <span className="text-rose-600 font-semibold">Meu rosto agora parece pelo menos 5 anos mais jovem</span>, e eu me sinto muito mais confiante.
            </p>
          </div>
          <div className="text-right">
            <p className="text-gray-600 font-medium">
              — {testimonialName}
            </p>
            <div className="inline-flex items-center gap-1 mt-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500 text-sm">5.0</span>
            </div>
          </div>
        </motion.div>
        
        {/* Progress Bar */}
        <div className="w-full max-w-md px-4">
          <div className="text-center mb-6">
            <p className="text-gray-600 font-medium mb-2">
              Analisando suas respostas e criando seu plano personalizado
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-blue-600 text-sm font-medium">
                Conectando ao banco de dados
              </span>
            </div>
          </div>
          
          <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-pink-500 to-rose-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
            {/* Efeito de brilho na barra de progresso */}
            <motion.div
              className="absolute left-0 top-0 h-full w-8 bg-white/30"
              animate={{ x: ['0%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              style={{ filter: 'blur(8px)' }}
            />
          </div>
          
          <div className="flex justify-between items-center mt-3">
            <span className="text-gray-500 text-sm">0%</span>
            <div className="text-center">
              <motion.span 
                key={progress}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="font-bold text-gray-800 text-lg"
              >
                {progress}%
              </motion.span>
            </div>
            <span className="text-gray-500 text-sm">100%</span>
          </div>
        </div>
      </div>
    </div>
  );
}