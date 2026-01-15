import { useState } from 'react';
import { motion } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { supabase } from '@/integrations/supabase/client';
import { Mail, ShieldCheck, Lock } from 'lucide-react';

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

  const isValidEmail = email && email.includes('@') && email.includes('.') && email.length > 5;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 flex flex-col">
      <QuizHeader showBack={false} />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 mb-4 border border-pink-200">
              <Mail className="w-10 h-10 text-rose-600" />
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-3">
              Seu plano de ação está
              <br />
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                pronto!
              </span>
            </h1>
            
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 mx-4 border border-pink-100 shadow-sm">
              <p className="text-gray-700 font-medium">
                Deixe seu email para receber seu plano personalizado
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300 shadow-lg"
              />
              {isValidEmail && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Security badges */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600 font-medium">
                  Suas informações estão 100% seguras
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-600">
                  <span className="font-medium">Privacidade garantida:</span> Luvya não compartilha suas informações com terceiros
                </span>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!isValidEmail || isSubmitting}
              className={`w-full py-5 rounded-2xl font-bold text-lg text-white transition-all duration-300 shadow-lg ${
                isValidEmail && !isSubmitting
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Enviando...</span>
                </div>
              ) : (
                'Receber meu plano personalizado'
              )}
            </button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <p className="text-gray-500 text-sm">
                Seu plano inclui exercícios, cronograma e recomendações personalizadas
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}