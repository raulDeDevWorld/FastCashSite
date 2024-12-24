import { PlayCircle } from 'lucide-react';

interface StoreButtonProps {
  variant?: 'primary' | 'secondary';
}

export function StoreButton({ variant = 'primary' }: StoreButtonProps) {
  const baseStyles = "flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all";
  const styles = {
    primary: "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20",
    secondary: "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20"
  };

  return (
    <a 
      href="https://play.google.com/store" 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseStyles} ${styles[variant]}`}
    >
      <PlayCircle className="h-5 w-5" />
      <span>Descargar App</span>
    </a>
  );
}