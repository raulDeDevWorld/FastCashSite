import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function GradientButton({ children, onClick, className = '' }: GradientButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative px-8 py-4 rounded-full font-semibold text-lg overflow-hidden ${className}`}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 transition-transform group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="relative z-10 flex items-center justify-center text-white">
        {children}
      </span>
    </motion.button>
  );
}