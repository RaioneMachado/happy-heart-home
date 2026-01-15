import { useState } from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { ContinueButton } from '../shared/ContinueButton';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const options = [
  { label: 'Estava estressado(a)', value: 'stressed' },
  { label: 'Tive insônia', value: 'insomnia' },
  { label: 'Estou sofrendo de ansiedade e ataques de pânico', value: 'anxiety' },
  { label: 'Estive me sentindo deprimido(a)', value: 'depressed' },
  { label: 'Nenhuma das opções acima', value: 'none' },
  { label: 'Prefiro não responder', value: 'prefer_not' },
];

export function Step25MentalHealth() {
  const { updateQuizData, nextStep } = useQuiz();
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (value: string) => {
    if (value === 'none' || value === 'prefer_not') {
      setSelected([value]);
    } else {
      setSelected(prev => {
        const filtered = prev.filter(v => v !== 'none' && v !== 'prefer_not');
        if (filtered.includes(value)) {
          return filtered.filter(v => v !== value);
        }
        return [...filtered, value];
      });
    }
  };

  const handleNext = () => {
    updateQuizData({ mentalHealth: selected });
    nextStep();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader showBack showProgress={false} />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-5 border border-pink-100 shadow-sm mb-6">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
                Outros fatores como estresse, sono ou
                sua dieta podem estar afetando sua pele.
                Como tem sido sua <span className="text-rose-600">saúde mental</span> ultimamente?
              </h1>
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200">
              <span className="text-rose-700 font-medium text-sm">
                Esta informação nos ajuda a adaptar seus exercícios
              </span>
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
                    ? option.value === 'none' || option.value === 'prefer_not'
                      ? 'bg-gradient-to-r from-rose-100 to-pink-100 border-rose-300 text-rose-700'
                      : 'bg-gradient-to-r from-pink-500 to-rose-500 border-transparent text-white'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-pink-300'
                }`}>
                  <span className={`font-medium ${selected.includes(option.value) 
                    ? option.value === 'none' || option.value === 'prefer_not' ? 'text-rose-700 font-semibold' : 'text-white font-semibold' 
                    : 'text-gray-800 group-hover:text-gray-900'
                  }`}>
                    {option.label}
                  </span>
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors duration-300 ${
                    selected.includes(option.value)
                      ? option.value === 'none' || option.value === 'prefer_not'
                        ? 'bg-rose-100 border-rose-300'
                        : 'bg-white border-white'
                      : 'border-gray-300 group-hover:border-pink-400'
                  }`}>
                    {selected.includes(option.value) && (
                      <svg className={`w-4 h-4 ${option.value === 'none' || option.value === 'prefer_not' ? 'text-rose-500' : 'text-rose-500'}`} fill="currentColor" viewBox="0 0 20 20">
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
                {selected.includes('none') || selected.includes('prefer_not') ? (
                  <span className="font-medium text-rose-600">
                    Resposta registrada com respeito
                  </span>
                ) : (
                  <>
                    <span className="font-bold text-pink-600">{selected.length}</span> opção{selected.length !== 1 ? 'es' : ''} selecionada{selected.length !== 1 ? 's' : ''}
                  </>
                )}
              </p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200">
              <span className="text-blue-600 font-medium text-sm">
                💙 Sua saúde mental é importante para nós
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <ContinueButton 
        onClick={handleNext} 
        disabled={selected.length === 0}
        label="Continuar"
      />
    </div>
  );
}