import { useEffect, useState } from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import { motion } from 'framer-motion';
import manBeforeAfter from '@/assets/man-before-after.png';
import womanBeforeAfter from '@/assets/woman-before-after-comparison.jpg';

export function Step19Loading() {
  const { nextStep, quizData } = useQuiz();
  const [progress, setProgress] = useState(0);

  // Choose image based on gender
  const beforeAfterImage = quizData.gender === 'male' ? manBeforeAfter : womanBeforeAfter;
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
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <header className="w-full bg-background sticky top-0 z-50">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-center">
          <h1 className="text-2xl font-semibold tracking-tight text-primary">•Luvya</h1>
        </div>
        <div className="w-full h-px bg-border" />
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-foreground">
            Você pode ficar {genderText} de novo!
            <br />
            Você só precisa de <span className="text-primary">yoga facial</span>
          </h2>
        </motion.div>
        
        {/* Before/After Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative mb-8 rounded-2xl overflow-hidden shadow-lg max-w-md w-full"
        >
          <img
            src={beforeAfterImage}
            alt="Antes e depois"
            className="w-full h-auto"
          />
        </motion.div>
        
        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card rounded-2xl p-6 max-w-md w-full shadow-sm mb-8"
        >
          <p className="text-center text-foreground italic">
            "Finalmente, encontrei um app que oferece os exercícios perfeitos
            para o meu problema—e funciona! <span className="text-primary font-medium">Meu rosto agora parece pelo menos 5 anos mais jovem</span>, e eu me sinto muito mais confiante."
          </p>
          <p className="text-center text-muted-foreground mt-4 font-medium">
            {testimonialName}
          </p>
        </motion.div>
        
        {/* Progress Bar */}
        <div className="w-full max-w-md">
          <p className="text-center text-muted-foreground mb-3">
            Conectando ao banco de dados
          </p>
          <div className="relative h-10 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-primary/30"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-bold text-foreground">{progress}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}