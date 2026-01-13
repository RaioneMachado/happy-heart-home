import { motion } from 'framer-motion';

interface OptionCardProps {
  label: string;
  description?: string;
  onClick: () => void;
  selected?: boolean;
  delay?: number;
}

export function OptionCard({ label, description, onClick, selected, delay = 0 }: OptionCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      onClick={onClick}
      className={`
        w-full text-left px-5 py-4 rounded-2xl bg-card shadow-sm
        hover:shadow-md transition-all duration-200
        ${selected ? 'ring-2 ring-primary bg-primary/5' : 'hover:bg-secondary/50'}
      `}
    >
      <span className="font-medium text-foreground">{label}</span>
      {description && (
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      )}
    </motion.button>
  );
}
