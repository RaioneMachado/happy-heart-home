import { motion } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { Check, Mail } from 'lucide-react';

export function Step33Newsletter() {
  const { nextStep, updateQuizData } = useQuiz();

  const handleChoice = (wantsNewsletter: boolean) => {
    updateQuizData({ wantsNewsletter });
    nextStep();
  };

  const choices = [
    {
      id: 'yes',
      label: 'SIM, EU QUERO',
      value: true,
      description: 'Receber dicas de Yoga Facial e atualizações do app',
      icon: Mail,
      className: 'quiz-gradient hover:opacity-90 text-white'
    },
    {
      id: 'no',
      label: 'Não quero receber',
      value: false,
      description: 'Apenas concluir o quiz',
      icon: Check,
      className: 'bg-secondary hover:bg-secondary/80 text-foreground'
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md text-center"
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4"
            >
              <Mail className="w-8 h-8 text-primary" />
            </motion.div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
              Quer receber{' '}
              <span className="text-primary">dicas exclusivas</span> de Yoga Facial?
            </h1>
            
            <p className="text-muted-foreground">
              Enviaremos emails com exercícios, novidades do app Luvya e conteúdo especial
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {choices.map((choice) => {
              const Icon = choice.icon;
              return (
                <motion.button
                  key={choice.id}
                  onClick={() => handleChoice(choice.value)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full p-6 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-200 shadow-lg hover:shadow-xl ${choice.className}`}
                  aria-label={`Opção: ${choice.label}`}
                >
                  <Icon className="w-6 h-6" />
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-lg">{choice.label}</span>
                    <span className="text-sm opacity-90 mt-1">{choice.description}</span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="bg-muted/30 rounded-xl p-4">
            <p className="text-xs text-muted-foreground">
              🔒 Seus dados estão seguros. Você pode cancelar a qualquer momento.
              Prometemos não enviar spam.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}