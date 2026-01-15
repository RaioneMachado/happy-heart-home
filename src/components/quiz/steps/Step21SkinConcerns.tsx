import { useState } from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { ContinueButton } from '../shared/ContinueButton';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const options = [
  { label: 'Acne e espinhas', value: 'acne' },
  { label: 'Vermelhidão', value: 'redness' },
  { label: 'Opacidade', value: 'dullness' },
  { label: 'Textura áspera', value: 'rough_texture' },
  { label: 'Tom de pele irregular', value: 'uneven_tone' },
  { label: 'Alterações de pigmentação', value: 'pigmentation' },
  { label: 'Nenhuma das opções acima', value: 'none' },
];

export function Step21SkinConcerns() {
  const { updateQuizData, nextStep } = useQuiz();
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (value: string) => {
    if (value === 'none') {
      setSelected(['none']);
    } else {
      setSelected(prev => {
        const filtered = prev.filter(v => v !== 'none');
        if (filtered.includes(value)) {
          return filtered.filter(v => v !== value);
        }
        return [...filtered, value];
      });
    }
  };

  const handleNext = () => {
    updateQuizData({ skinConcerns: selected });
    nextStep();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader showBack showProgress />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
              Você tem alguma das
              <br />
              seguintes preocupações com a <span className="text-primary">pele</span>?
            </h1>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 mx-4 border border-pink-100 shadow-sm">
              <p className="text-gray-700 font-medium">
                Selecione todas que se aplicam
              </p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleToggle(option.value)}
                className="group"
              >
                <div className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl border-2 transition-all duration-300 shadow-md hover:shadow-lg ${
                  selected.includes(option.value)
                    ? option.value === 'none'
                      ? 'bg-gradient-to-r from-rose-100 to-pink-100 border-rose-300 text-rose-700'
                      : 'bg-gradient-to-r from-pink-500 to-rose-500 border-transparent text-white'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-pink-300'
                }`}>
                  <span className={`font-medium ${selected.includes(option.value) 
                    ? option.value === 'none' ? 'text-rose-700 font-semibold' : 'text-white font-semibold' 
                    : 'text-gray-800 group-hover:text-gray-900'
                  }`}>
                    {option.label}
                  </span>
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors duration-300 ${
                    selected.includes(option.value)
                      ? option.value === 'none'
                        ? 'bg-rose-100 border-rose-300'
                        : 'bg-white border-white'
                      : 'border-gray-300 group-hover:border-pink-400'
                  }`}>
                    {selected.includes(option.value) && (
                      <svg className={`w-4 h-4 ${option.value === 'none' ? 'text-rose-500' : 'text-rose-500'}`} fill="currentColor" viewBox="0 0 20 20">
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
                {selected.includes('none') ? (
                  <span className="font-medium text-rose-600">
                    Nenhuma preocupação selecionada
                  </span>
                ) : (
                  <>
                    <span className="font-bold text-pink-600">{selected.length}</span> opção{selected.length !== 1 ? 'es' : ''} selecionada{selected.length !== 1 ? 's' : ''}
                  </>
                )}
              </p>
            </motion.div>
          )}

          <div className="text-center">
            <p className="text-gray-500 text-sm">
              *Podemos personalizar seus tratamentos de acordo com suas necessidades
            </p>
          </div>
        </motion.div>
      </div>

      <ContinueButton 
        onClick={handleNext} 
        disabled={selected.length === 0}
        label="Próximo"
      />
    </div>
  );
}