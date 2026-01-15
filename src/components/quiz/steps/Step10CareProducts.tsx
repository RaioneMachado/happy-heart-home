import { motion } from 'framer-motion';
import { useState } from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { ContinueButton } from '../shared/ContinueButton';

const products = [
  { label: 'Sabonete/Limpador', value: 'cleanser' },
  { label: 'Tônico', value: 'toner' },
  { label: 'Sérum', value: 'serum' },
  { label: 'Hidratante', value: 'moisturizer' },
  { label: 'Creme para olhos', value: 'eye-cream' },
  { label: 'Protetor labial', value: 'lip-balm' },
  { label: 'Nenhum desses', value: 'none' },
];

export function Step10CareProducts() {
  const { updateQuizData, nextStep } = useQuiz();
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (value: string) => {
    if (value === 'none') {
      setSelected(['none']);
    } else {
      setSelected(prev => {
        const withoutNone = prev.filter(v => v !== 'none');
        return withoutNone.includes(value)
          ? withoutNone.filter(v => v !== value)
          : [...withoutNone, value];
      });
    }
  };

  const handleContinue = () => {
    updateQuizData({ careProducts: selected });
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
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
              Cosméticos de cuidado
            </h1>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 mx-4 border border-pink-100 shadow-sm">
              <p className="text-gray-700 font-medium">
                Quais dos seguintes produtos estão incluídos na sua rotina?
              </p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {products.map((product) => (
              <button
                key={product.value}
                onClick={() => toggleOption(product.value)}
                className="group"
              >
                <div className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between shadow-md hover:shadow-lg ${
                  selected.includes(product.value)
                    ? product.value === 'none' 
                      ? 'bg-gradient-to-r from-rose-100 to-pink-100 border-rose-300 text-rose-700'
                      : 'bg-gradient-to-r from-pink-500 to-rose-500 border-transparent text-white'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-pink-300'
                }`}>
                  <span className={`font-medium ${selected.includes(product.value) 
                    ? product.value === 'none' ? 'text-rose-700 font-semibold' : 'text-white font-semibold' 
                    : 'text-gray-800 group-hover:text-gray-900'
                  }`}>
                    {product.label}
                  </span>
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors duration-300 ${
                    selected.includes(product.value)
                      ? product.value === 'none' 
                        ? 'bg-rose-100 border-rose-300'
                        : 'bg-white border-white'
                      : 'border-gray-300 group-hover:border-pink-400'
                  }`}>
                    {selected.includes(product.value) && (
                      <svg className={`w-4 h-4 ${product.value === 'none' ? 'text-rose-500' : 'text-rose-500'}`} fill="currentColor" viewBox="0 0 20 20">
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
                    Nenhum produto selecionado
                  </span>
                ) : (
                  <>
                    <span className="font-bold text-pink-600">{selected.length}</span> produto{selected.length !== 1 ? 's' : ''} selecionado{selected.length !== 1 ? 's' : ''}
                  </>
                )}
              </p>
            </motion.div>
          )}

          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Selecione todos que se aplicam à sua rotina
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