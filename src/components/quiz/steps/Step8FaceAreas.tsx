import { motion } from 'framer-motion';
import { useState } from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { ContinueButton } from '../shared/ContinueButton';
import faceProfile from '@/assets/face-profile-illustration.png';

const areaOptions = [
  { label: 'Testa', value: 'forehead', position: { top: '8%', right: '5%' } },
  { label: 'Olhos', value: 'eyes', position: { top: '22%', right: '5%' } },
  { label: 'Boca', value: 'mouth', position: { top: '36%', right: '5%' } },
  { label: 'Queixo', value: 'chin', position: { top: '50%', right: '5%' } },
  { label: 'Bochechas', value: 'cheeks', position: { top: '64%', right: '5%' } },
  { label: 'Linha da mandíbula', value: 'jawline', position: { top: '78%', right: '5%' } },
  { label: 'Pescoço', value: 'neck', position: { top: '92%', right: '5%' } },
];

// SVG markers for face areas
const faceMarkers: Record<string, { cx: number; cy: number }> = {
  forehead: { cx: 55, cy: 15 },
  eyes: { cx: 48, cy: 28 },
  mouth: { cx: 35, cy: 52 },
  chin: { cx: 30, cy: 65 },
  cheeks: { cx: 45, cy: 42 },
  jawline: { cx: 35, cy: 58 },
  neck: { cx: 40, cy: 80 },
};

export function Step8FaceAreas() {
  const { updateQuizData, nextStep } = useQuiz();
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (value: string) => {
    setSelected(prev => 
      prev.includes(value) 
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const handleContinue = () => {
    updateQuizData({ faceAreasToImprove: selected });
    nextStep();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader showBack showProgress />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-center text-foreground mb-6">
            Quais áreas você gostaria
            <br />
            de melhorar?
          </h1>

          <div className="relative flex gap-4">
            {/* Face illustration with markers */}
            <div className="relative w-1/2">
              <img 
                src={faceProfile} 
                alt="Face profile" 
                className="w-full h-auto"
              />
              {/* SVG overlay for markers */}
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
              >
                {selected.map(area => {
                  const marker = faceMarkers[area];
                  if (!marker) return null;
                  return (
                    <motion.circle
                      key={area}
                      cx={marker.cx}
                      cy={marker.cy}
                      r="4"
                      fill="hsl(var(--primary))"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    />
                  );
                })}
              </svg>
            </div>

            {/* Options */}
            <div className="flex-1 space-y-2">
              {areaOptions.map((option, index) => (
                <motion.button
                  key={option.value}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => toggleOption(option.value)}
                  className={`w-full p-3 rounded-xl border transition-all flex items-center justify-between ${
                    selected.includes(option.value)
                      ? 'bg-primary/10 border-primary'
                      : 'bg-card border-border hover:border-primary/50'
                  }`}
                >
                  <span className="font-medium text-foreground text-sm">{option.label}</span>
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    selected.includes(option.value)
                      ? 'bg-primary border-primary'
                      : 'border-muted-foreground'
                  }`}>
                    {selected.includes(option.value) && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <ContinueButton 
        onClick={handleContinue} 
        disabled={selected.length === 0}
        label="Próximo"
      />
    </div>
  );
}
