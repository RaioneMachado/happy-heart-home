import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { Star, Check, Users, Award, Target, Sparkles } from 'lucide-react';

const loadingSteps = [
  { 
    label: 'Analisando condição da pele', 
    key: 'skin',
    icon: Sparkles
  },
  { 
    label: 'Cuidados com a Pele e Rotina', 
    key: 'routine',
    icon: Award
  },
  { 
    label: 'Condições Médicas', 
    key: 'medical',
    icon: Users
  },
  { 
    label: 'Gerando Seu Plano de Ação', 
    key: 'plan',
    icon: Target
  },
];

const testimonials = [
  {
    name: 'Maria',
    age: 42,
    text: 'Minha pele parece muito mais tonificada e as rugas estão menos visíveis. Além disso, eu realmente gosto dessas sessões relaxantes de automassagem.',
    weeks: 6
  },
  {
    name: 'Ana',
    age: 38,
    text: 'Depois de 3 semanas já notei diferença no contorno do meu rosto. Recomendo muito!',
    weeks: 3
  },
  {
    name: 'Carla',
    age: 45,
    text: 'Simples, fácil e eficaz. Os exercícios são rápidos e os resultados são reais.',
    weeks: 8
  },
];

export function Step31Loading() {
  const { nextStep, updateQuizData } = useQuiz();
  const [currentStep, setCurrentStep] = useState(0);
  const [stepProgress, setStepProgress] = useState<number[]>([0, 0, 0, 0]);
  const [showModal, setShowModal] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Testimonial carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Loading animation
  useEffect(() => {
    const stepDuration = 2000; // 2s per step
    const incrementInterval = 40;
    
    const runStep = (stepIndex: number) => {
      if (stepIndex >= loadingSteps.length) {
        return;
      }

      let progress = 0;
      const increment = 100 / (stepDuration / incrementInterval);
      
      const interval = setInterval(() => {
        progress += increment;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          
          setStepProgress(prev => {
            const newProgress = [...prev];
            newProgress[stepIndex] = 100;
            return newProgress;
          });
          
          // Check if we should show modal (at step 3, around 80%)
          if (stepIndex === 3 && progress >= 80) {
            setShowModal(true);
          } else {
            setCurrentStep(stepIndex + 1);
            runStep(stepIndex + 1);
          }
        } else {
          setStepProgress(prev => {
            const newProgress = [...prev];
            newProgress[stepIndex] = progress;
            return newProgress;
          });
          
          // Show modal at 80% of the last step
          if (stepIndex === 3 && progress >= 80 && !showModal) {
            setShowModal(true);
          }
        }
      }, incrementInterval);
    };

    runStep(0);
  }, []);

  const handleModalAnswer = (tried: boolean) => {
    updateQuizData({ triedFaceYoga: tried });
    setShowModal(false);
    nextStep();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 flex flex-col">
      <QuizHeader showBack={false} />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
              Verificando com perfis de
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                saúde semelhantes
              </span>
            </h2>
          </div>

          {/* Loading steps */}
          <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 border border-pink-100 shadow-lg mb-8">
            <div className="space-y-4">
              {loadingSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.key} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          stepProgress[index] >= 100 
                            ? 'bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200' 
                            : 'bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200'
                        }`}>
                          <Icon className={`w-5 h-5 ${
                            stepProgress[index] >= 100 ? 'text-green-600' : 'text-pink-500'
                          }`} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-sm font-medium ${
                            currentStep >= index ? 'text-gray-800' : 'text-gray-500'
                          }`}>
                            {step.label}
                          </span>
                          <span className="text-sm font-bold text-gray-700">
                            {stepProgress[index] >= 100 ? '100%' : `${Math.round(stepProgress[index])}%`}
                          </span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${
                              stepProgress[index] >= 100 
                                ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                                : 'bg-gradient-to-r from-pink-500 to-rose-500'
                            }`}
                            initial={{ width: 0 }}
                            animate={{ width: `${stepProgress[index]}%` }}
                            transition={{ duration: 0.1 }}
                          />
                          {/* Efeito de brilho na barra de progresso */}
                          {stepProgress[index] > 0 && stepProgress[index] < 100 && (
                            <motion.div
                              className="absolute h-full w-8 bg-white/40"
                              animate={{ x: ['0%', '100%'] }}
                              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                              style={{ filter: 'blur(6px)' }}
                            />
                          )}
                        </div>
                      </div>
                      {stepProgress[index] >= 100 && (
                        <div className="flex-shrink-0 ml-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Trust badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200">
              <Users className="w-4 h-4 text-rose-600" />
              <span className="text-rose-700 font-medium text-sm">
                Confiado por mais de 273.908 clientes
              </span>
            </div>
          </div>

          {/* Testimonial carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 border border-pink-100 shadow-lg"
              >
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-center text-gray-600 leading-relaxed mb-4 italic">
                  "{testimonials[testimonialIndex].text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-800">
                      {testimonials[testimonialIndex].name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[testimonialIndex].age} anos • {testimonials[testimonialIndex].weeks} semanas
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    +{testimonials[testimonialIndex].weeks * 15}%
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === testimonialIndex 
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => {}}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 flex items-center justify-center md:w-full md:max-w-sm"
            >
              <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 shadow-2xl w-full max-w-sm mx-auto border border-pink-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 flex items-center justify-center mx-auto mb-4 border border-pink-200">
                    <Sparkles className="w-8 h-8 text-rose-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Você já experimentou yoga facial antes?
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Isso nos ajuda a ajustar sua experiência inicial
                  </p>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={() => handleModalAnswer(true)}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Sim, já experimentei
                  </button>
                  <button
                    onClick={() => handleModalAnswer(false)}
                    className="w-full py-4 rounded-xl bg-white border-2 border-gray-200 text-gray-800 font-semibold transition-all duration-300 hover:border-pink-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Não, é minha primeira vez
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}