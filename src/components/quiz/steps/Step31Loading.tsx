import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { Star, Check } from 'lucide-react';

const loadingSteps = [
  { label: 'Analisando condição da pele', key: 'skin' },
  { label: 'Cuidados com a Pele e Rotina', key: 'routine' },
  { label: 'Condições Médicas', key: 'medical' },
  { label: 'Gerando Seu Plano de Ação', key: 'plan' },
];

const testimonials = [
  {
    name: 'Maria',
    text: 'Minha pele parece muito mais tonificada e as rugas estão menos visíveis. Além disso, eu realmente gosto dessas sessões relaxantes de automassagem.',
  },
  {
    name: 'Ana',
    text: 'Depois de 3 semanas já notei diferença no contorno do meu rosto. Recomendo muito!',
  },
  {
    name: 'Carla',
    text: 'Simples, fácil e eficaz. Os exercícios são rápidos e os resultados são reais.',
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
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Loading animation
  useEffect(() => {
    const stepDuration = 2500; // 2.5s per step
    const incrementInterval = 50;
    
    const runStep = (stepIndex: number) => {
      if (stepIndex >= loadingSteps.length) {
        // Show modal at 80%
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
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-center text-foreground mb-2">
            Verificando com perfis de
            <br />
            saúde semelhantes...
          </h1>

          {/* Loading steps */}
          <div className="space-y-4 mb-8 mt-8">
            {loadingSteps.map((step, index) => (
              <div key={step.key} className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${currentStep >= index ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                    {step.label}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stepProgress[index] >= 100 ? (
                      <Check className="w-4 h-4 text-primary" />
                    ) : (
                      `${Math.round(stepProgress[index])}%`
                    )}
                  </span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${stepProgress[index]}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Trust badge */}
          <p className="text-center text-sm text-primary font-medium mb-6">
            Confiado por mais de 273.908 clientes
          </p>

          {/* Testimonial carousel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-card rounded-2xl p-6 shadow-lg"
            >
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-center text-muted-foreground mb-4">
                "{testimonials[testimonialIndex].text}"
              </p>
              <p className="text-center font-semibold text-foreground">
                {testimonials[testimonialIndex].name}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Carousel dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === testimonialIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
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
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm px-4"
            >
              <div className="bg-card rounded-2xl p-6 shadow-2xl">
                <h2 className="text-xl font-bold text-center text-foreground mb-6">
                  Você já experimentou yoga facial antes?
                </h2>
                <div className="space-y-3">
                  <button
                    onClick={() => handleModalAnswer(true)}
                    className="w-full py-4 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-medium transition-colors"
                  >
                    Sim
                  </button>
                  <button
                    onClick={() => handleModalAnswer(false)}
                    className="w-full py-4 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-medium transition-colors"
                  >
                    Não
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
