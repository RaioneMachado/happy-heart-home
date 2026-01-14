import { motion } from 'framer-motion';
import { useState } from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { ContinueButton } from '../shared/ContinueButton';

const areaOptions = [
  { label: 'Testa', value: 'forehead' },
  { label: 'Olhos', value: 'eyes' },
  { label: 'Boca', value: 'mouth' },
  { label: 'Queixo', value: 'chin' },
  { label: 'Bochechas', value: 'cheeks' },
  { label: 'Linha da mandíbula', value: 'jawline' },
  { label: 'Pescoço', value: 'neck' },
];

// SVG markers for face areas - positions relative to the SVG viewBox
const faceMarkers: Record<string, { x: number; y: number }> = {
  forehead: { x: 50, y: 18 },
  eyes: { x: 50, y: 32 },
  cheeks: { x: 50, y: 48 },
  mouth: { x: 50, y: 58 },
  chin: { x: 50, y: 72 },
  jawline: { x: 30, y: 62 },
  neck: { x: 50, y: 88 },
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
      
      <div className="flex-1 flex flex-col items-center px-4 py-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <h1 className="text-xl md:text-2xl font-bold text-center text-foreground mb-4 md:mb-6">
            Quais áreas você gostaria
            <br />
            de melhorar?
          </h1>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {/* Face illustration with markers */}
            <div className="relative w-full md:w-1/2 flex justify-center">
              <div className="relative w-48 h-64 md:w-56 md:h-72">
                <svg 
                  viewBox="0 0 100 120" 
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Hair */}
                  <ellipse cx="50" cy="15" rx="35" ry="12" fill="#8B7355" />
                  <ellipse cx="50" cy="25" rx="38" ry="18" fill="#8B7355" />
                  
                  {/* Face outline */}
                  <ellipse 
                    cx="50" 
                    cy="50" 
                    rx="32" 
                    ry="38" 
                    fill="#F5DEB3" 
                    stroke="#E8D4C4"
                    strokeWidth="1"
                  />
                  
                  {/* Eyebrows */}
                  <path d="M32 28 Q38 25 44 28" fill="none" stroke="#8B7355" strokeWidth="1.5" />
                  <path d="M56 28 Q62 25 68 28" fill="none" stroke="#8B7355" strokeWidth="1.5" />
                  
                  {/* Eyes */}
                  <ellipse cx="38" cy="35" rx="5" ry="3" fill="white" stroke="#333" strokeWidth="0.5" />
                  <ellipse cx="62" cy="35" rx="5" ry="3" fill="white" stroke="#333" strokeWidth="0.5" />
                  <circle cx="38" cy="35" r="2" fill="#4A3728" />
                  <circle cx="62" cy="35" r="2" fill="#4A3728" />
                  
                  {/* Nose */}
                  <path d="M50 40 L48 52 Q50 54 52 52 L50 40" fill="none" stroke="#D4A574" strokeWidth="1" />
                  
                  {/* Mouth */}
                  <path d="M42 60 Q50 65 58 60" fill="none" stroke="#CC8080" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Ears */}
                  <ellipse cx="18" cy="45" rx="4" ry="8" fill="#F5DEB3" stroke="#E8D4C4" strokeWidth="0.5" />
                  <ellipse cx="82" cy="45" rx="4" ry="8" fill="#F5DEB3" stroke="#E8D4C4" strokeWidth="0.5" />
                  
                  {/* Neck */}
                  <rect x="40" y="85" width="20" height="25" fill="#F5DEB3" />
                  
                  {/* Markers for selected areas */}
                  {selected.map(area => {
                    const marker = faceMarkers[area];
                    if (!marker) return null;
                    return (
                      <g key={area}>
                        <motion.circle
                          cx={marker.x}
                          cy={marker.y}
                          r="6"
                          fill="hsl(var(--primary))"
                          fillOpacity="0.3"
                          initial={{ scale: 0 }}
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        />
                        <motion.circle
                          cx={marker.x}
                          cy={marker.y}
                          r="4"
                          fill="hsl(var(--primary))"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        />
                        {area === 'jawline' && (
                          <>
                            <motion.circle
                              cx={70}
                              cy={marker.y}
                              r="4"
                              fill="hsl(var(--primary))"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            />
                          </>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>
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
                  className={`w-full p-3 md:p-4 rounded-xl border transition-all flex items-center justify-between ${
                    selected.includes(option.value)
                      ? 'bg-primary/10 border-primary'
                      : 'bg-card border-border hover:border-primary/50'
                  }`}
                >
                  <span className="font-medium text-foreground text-sm md:text-base">{option.label}</span>
                  <div className={`w-5 h-5 md:w-6 md:h-6 rounded border-2 flex items-center justify-center ${
                    selected.includes(option.value)
                      ? 'bg-primary border-primary'
                      : 'border-muted-foreground'
                  }`}>
                    {selected.includes(option.value) && (
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
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
