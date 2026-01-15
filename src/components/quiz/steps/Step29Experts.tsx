import { useQuiz } from '@/contexts/QuizContext';
import { ContinueButton } from '../shared/ContinueButton';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Star, CheckCircle } from 'lucide-react';
import expertJillian from '@/assets/expert-jillian.jpg';
import expertIrina from '@/assets/expert-irina.jpg';
import expertMarina from '@/assets/expert-marina.jpg';

const experts = [
  {
    name: 'Julia Orbes',
    image: expertJillian,
    description: 'Professora certificada de Yoga Facial com mais de 10 anos de experiência em fitness facial, pilates e pole fitness. Diretora de um clube de pilates facial.'
  },
  {
    name: 'Itaiana Oliveira',
    image: expertIrina,
    description: 'Treinadora certificada de massagem facial anti-envelhecimento. Mais de 10 anos de experiência como especialista em liberação miofascial. Co-proprietária de um clube de neuro-fitness.'
  },
  {
    name: 'Marina Vasconcelos',
    image: expertMarina,
    description: 'Treinadora certificada de construção facial com mais de 12 anos de experiência. Especialista em neurologia funcional. Co-proprietária de um clube de neuro-fitness.'
  }
];

export function Step29Experts() {
  const { nextStep } = useQuiz();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 flex flex-col">
      <header className="w-full sticky top-0 z-50">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-center">
          <h1 className="text-2xl font-semibold tracking-tight text-primary">•Luvya</h1>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
      </header>
      
      <div className="flex-1 flex flex-col items-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 px-4"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full px-4 py-3 mb-4 border border-pink-200">
            <ShieldCheck className="w-6 h-6 text-rose-600" />
            <h2 className="text-lg font-bold text-rose-700">
              Garantia de qualidade profissional
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 border border-pink-100 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
              Os programas Luvya são desenvolvidos por
              cosmetologistas profissionais e especialistas
              em yoga facial
            </h3>
          </div>
        </motion.div>
        
        <div className="w-full max-w-md px-4 space-y-4 mb-8">
          {experts.map((expert) => (
            <div
              key={expert.name}
              className="group"
            >
              <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 flex gap-5 border border-pink-100 group-hover:border-pink-200">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-pink-200 shadow-md">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center shadow-md">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg text-gray-800">{expert.name}</h3>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {expert.description}
                  </p>
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-pink-100">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-medium text-green-600">Certificada internacionalmente</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center px-4"
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-5 border border-blue-200 shadow-sm max-w-sm">
            <p className="text-gray-700 font-medium">
              <span className="font-bold text-blue-600">+30 especialistas</span> colaboram continuamente
              <br />
              para atualizar e melhorar nossos programas
            </p>
          </div>
        </motion.div>
      </div>
      
      <div className="p-6">
        <ContinueButton 
          onClick={nextStep} 
          label="Avançar para meu plano"
          className="shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>
    </div>
  );
}