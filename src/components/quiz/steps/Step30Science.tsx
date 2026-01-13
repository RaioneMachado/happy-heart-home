import { motion } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { ContinueButton } from '../shared/ContinueButton';
import harvardLogo from '@/assets/harvard-logo.png';
import northwesternLogo from '@/assets/northwestern-logo.png';

export function Step30Science() {
  const { nextStep } = useQuiz();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader showBack />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-center text-foreground mb-8">
            Reverta suas rugas com
            <br />
            ciência e autocuidado
          </h1>

          {/* Graph */}
          <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 mb-6">
            <svg viewBox="0 0 300 150" className="w-full">
              {/* Y axis */}
              <line x1="30" y1="20" x2="30" y2="120" stroke="#e5e7eb" strokeWidth="1" />
              {/* X axis */}
              <line x1="30" y1="120" x2="280" y2="120" stroke="#e5e7eb" strokeWidth="1" />
              
              {/* Curve path - skin condition worsening */}
              <path 
                d="M 30 40 Q 100 35, 140 50 Q 180 65, 220 85 Q 250 100, 280 110" 
                fill="none" 
                stroke="url(#gradient)" 
                strokeWidth="3"
                strokeDasharray="5,5"
              />
              
              {/* Gradient definition */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f87171" />
                  <stop offset="100%" stopColor="#fecaca" />
                </linearGradient>
              </defs>
              
              {/* Points on curve */}
              <circle cx="140" cy="50" r="8" fill="#f87171" />
              <circle cx="200" cy="75" r="8" fill="#f87171" />
              
              {/* Label */}
              <rect x="200" y="90" width="80" height="20" rx="4" fill="#f87171" />
              <text x="240" y="104" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                SEM YOGA FACIAL
              </text>
              
              {/* X axis label */}
              <text x="155" y="140" textAnchor="middle" fill="#6b7280" fontSize="8">
                CONDIÇÃO DA PELE PIORANDO →
              </text>
            </svg>
          </div>

          {/* Harvard reference */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-start gap-4 mb-4"
          >
            <img src={harvardLogo} alt="Harvard" className="w-12 h-12 object-contain" />
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">Harvard Medical School</span> relata que 
              exercícios faciais também ajudam a melhorar o tônus muscular no rosto e podem ajudar com 
              perda de gordura relacionada à gravidade ou redistribuição no rosto.
            </p>
          </motion.div>

          {/* Northwestern reference */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-start gap-4"
          >
            <img src={northwesternLogo} alt="Northwestern" className="w-12 h-12 object-contain" />
            <p className="text-sm text-muted-foreground">
              Dermatologistas da <span className="font-bold text-foreground">Northwestern University</span> relatam que 
              yoga facial comprovadamente faz você parecer <span className="text-primary font-medium">3 anos mais jovem em 20 semanas</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <ContinueButton onClick={nextStep} label="Próximo" />
    </div>
  );
}
