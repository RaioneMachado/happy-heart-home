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
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-center text-foreground mb-4">
            Quais áreas você gostaria
          </h1>
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">
            de <span className="text-primary">melhorar</span>?
          </h2>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {areaOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => toggleOption(option.value)}
                className="group"
              >
                <div className={`p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between shadow-md hover:shadow-lg ${
                  selected.includes(option.value)
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 border-transparent text-white'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-pink-300'
                }`}>
                  <span className={`font-medium ${selected.includes(option.value) ? 'text-white' : 'text-gray-800 group-hover:text-gray-900'}`}>
                    {option.label}
                  </span>
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors duration-300 ${
                    selected.includes(option.value)
                      ? 'bg-white border-white'
                      : 'border-gray-300 group-hover:border-pink-400'
                  }`}>
                    {selected.includes(option.value) && (
                      <svg className="w-4 h-4 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {selected.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-4"
            >
              <p className="text-gray-600">
                <span className="font-bold text-pink-600">{selected.length}</span> área{selected.length !== 1 ? 's' : ''} selecionada{selected.length !== 1 ? 's' : ''}
              </p>
            </motion.div>
          )}

          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Selecione todas as áreas que você deseja melhorar
            </p>
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