import { motion } from 'framer-motion';
import { useState } from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { supabase } from '@/integrations/supabase/client';

export function Step32Email() {
  const { nextStep, updateQuizData, quizData } = useQuiz();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async () => {
    if (isValidEmail && !isSubmitting) {
      setIsSubmitting(true);
      
      try {
        // Send email to owner via edge function
        await supabase.functions.invoke('send-email', {
          body: { 
            email, 
            quizData: { ...quizData, email } 
          }
        });
      } catch (error) {
        console.error('Error sending email:', error);
        // Continue even if email fails - don't block user
      }
      
      updateQuizData({ email });
      setIsSubmitting(false);
      nextStep();
    }
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
            Seu plano de ação está pronto!
          </h1>
          <p className="text-center text-primary mb-8">
            Digite seu email para começar
          </p>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-4 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />

            <p className="text-center text-sm text-primary">
              Suas informações estão 100% seguras.
            </p>
            <p className="text-center text-xs text-muted-foreground">
              Luvly não compartilha suas{' '}
              <span className="underline">informações pessoais</span> com terceiros.
            </p>

            <button
              onClick={handleSubmit}
              disabled={!isValidEmail || isSubmitting}
              className={`w-full py-4 rounded-full font-semibold text-white transition-all ${
                isValidEmail && !isSubmitting
                  ? 'quiz-gradient hover:opacity-90'
                  : 'bg-muted text-muted-foreground cursor-not-allowed'
              }`}
            >
              {isSubmitting ? 'Enviando...' : 'Obter meu Plano'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
