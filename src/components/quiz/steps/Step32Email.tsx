import { useState } from 'react';
import { motion } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { supabase } from '@/integrations/supabase/client';

export function Step32Email() {
  const { nextStep, updateQuizData, quizData } = useQuiz();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) return;
    
    setIsSubmitting(true);
    updateQuizData({ email });

    try {
      // Send email silently in the background
      await supabase.functions.invoke('send-email', {
        body: { email, quizData: { ...quizData, email } }
      });
    } catch (error) {
      console.error('Error sending email:', error);
    }

    setIsSubmitting(false);
    nextStep();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-center text-foreground mb-2">
            Seu plano de ação está pronto!
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Deixe seu email para receber seu plano personalizado
          </p>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            
            <p className="text-center text-sm text-primary">
              Suas informações estão 100% seguras.
            </p>
            <p className="text-center text-xs text-muted-foreground">
              Luvya não compartilha suas{' '}
              <span className="underline">informações pessoais</span> com terceiros.
            </p>

            <button
              onClick={handleSubmit}
              disabled={!email || !email.includes('@') || isSubmitting}
              className={`w-full py-4 rounded-full font-semibold text-white transition-all ${
                email && email.includes('@') && !isSubmitting
                  ? 'quiz-gradient hover:opacity-90'
                  : 'bg-muted-foreground/40 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? 'Enviando...' : 'Continuar'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}