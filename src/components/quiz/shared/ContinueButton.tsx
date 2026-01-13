import { motion } from 'framer-motion';

interface ContinueButtonProps {
  onClick: () => void;
  disabled?: boolean;
  label?: string;
}

export function ContinueButton({ onClick, disabled = false, label = 'Continuar' }: ContinueButtonProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background to-transparent">
      <div className="max-w-md mx-auto">
        <motion.button
          whileHover={!disabled ? { scale: 1.02 } : {}}
          whileTap={!disabled ? { scale: 0.98 } : {}}
          onClick={onClick}
          disabled={disabled}
          className={`
            w-full py-4 rounded-full font-semibold text-white text-lg
            transition-all duration-300
            ${disabled 
              ? 'bg-muted-foreground/40 cursor-not-allowed' 
              : 'quiz-gradient hover:shadow-lg'}
          `}
        >
          {label}
        </motion.button>
      </div>
    </div>
  );
}
