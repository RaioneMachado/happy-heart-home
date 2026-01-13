import { useQuiz } from '@/contexts/QuizContext';
import { ContinueButton } from '../shared/ContinueButton';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import expertJillian from '@/assets/expert-jillian.jpg';
import expertIrina from '@/assets/expert-irina.jpg';
import expertMarina from '@/assets/expert-marina.jpg';

const experts = [
  {
    name: 'Jillian Osborne',
    image: expertJillian,
    description: 'Professora certificada de Yoga Facial com mais de 10 anos de experiência em fitness facial, pilates e pole fitness. Diretora de um clube de pilates facial.'
  },
  {
    name: 'Irina Makarevich',
    image: expertIrina,
    description: 'Treinadora certificada de massagem facial anti-envelhecimento. Mais de 10 anos de experiência como especialista em liberação miofascial. Co-proprietária de um clube de neuro-fitness.'
  },
  {
    name: 'Marina Vasilevskaya',
    image: expertMarina,
    description: 'Treinadora certificada de construção facial com mais de 12 anos de experiência. Especialista em neurologia funcional. Co-proprietária de um clube de neuro-fitness.'
  }
];

export function Step29Experts() {
  const { nextStep } = useQuiz();

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <header className="w-full bg-background sticky top-0 z-50">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-center">
          <h1 className="text-2xl font-semibold tracking-tight">•Luvly</h1>
        </div>
        <div className="w-full h-px bg-border" />
      </header>
      
      <div className="flex-1 flex flex-col items-center px-4 py-8 pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
        >
          <ShieldCheck className="w-6 h-6 text-primary" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-bold text-foreground text-center mb-8 max-w-sm"
        >
          Os programas Luvly são desenvolvidos por
          cosmetologistas profissionais e especialistas
          em yoga facial
        </motion.h2>
        
        <div className="w-full max-w-md space-y-4">
          {experts.map((expert, index) => (
            <motion.div
              key={expert.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-card rounded-2xl p-4 shadow-sm flex gap-4"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-14 h-14 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-foreground">{expert.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {expert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <ContinueButton onClick={nextStep} label="Próximo" />
    </div>
  );
}
