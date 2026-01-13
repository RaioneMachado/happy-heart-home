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
          className="w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-center text-foreground mb-2">
            Cosméticos de cuidado
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Quais dos seguintes produtos estão incluídos na sua rotina?
          </p>

          <div className="space-y-3">
            {products.map((product, index) => (
              <motion.button
                key={product.value}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => toggleOption(product.value)}
                className={`w-full p-4 rounded-2xl border transition-all flex items-center justify-between ${
                  selected.includes(product.value)
                    ? 'bg-primary/10 border-primary'
                    : 'bg-card border-border hover:border-primary/50'
                }`}
              >
                <span className="font-medium text-foreground">{product.label}</span>
                <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                  selected.includes(product.value)
                    ? 'bg-primary border-primary'
                    : 'border-muted-foreground'
                }`}>
                  {selected.includes(product.value) && (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  )}
                </div>
              </motion.button>
            ))}
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
