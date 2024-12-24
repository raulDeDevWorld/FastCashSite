import { Wallet, ChevronRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { StoreButton } from '../ui/StoreButton';
import { GradientButton } from '../ui/GradientButton';
import { FadeIn } from '../animations/FadeIn';
import { ScaleIn } from '../animations/ScaleIn';

export function Header() {
  return (
    <header className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        <motion.div 
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
         <img className='relative h-12 border-gray-100 border rounded-[10px]' src="https://firebasestorage.googleapis.com/v0/b/driver-booster-11.appspot.com/o/130x130%20px%20Fast%20Cash%20Imagotipo%20V1.0-01%201%402x.png?alt=media&token=a01be1ca-1cad-4fb9-8f50-420838adff7f" alt="" />
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            FastCash
          </span>
        </motion.div>
        <div className=" items-center gap-4 hidden md:flex">
          <StoreButton />
          {/* <motion.button 
            className="bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Iniciar sesión
          </motion.button> */}
        </div>
      </nav>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <FadeIn>
              <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full mb-6 border border-blue-400/20">
                <span className="text-blue-200">✨ Préstamos 100% en línea</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Tu préstamo al
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> instante</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Obtén hasta $10,000 de forma inmediata sin complicaciones. 
                <span className="block mt-2">Sin papeleos, 100% digital y seguro.</span>
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4">
                <GradientButton>
                  Solicitar ahora 
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </GradientButton>
                <StoreButton variant="secondary" />
              </div>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="mt-8 flex items-center gap-6">
                <motion.div 
                  className="flex -space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i}`}
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </motion.div>
                <p className="text-sm text-blue-200">
                  +1,000 personas obtuvieron su préstamo hoy
                </p>
              </div>
            </FadeIn>
          </div>
          
          <ScaleIn delay={0.4}>
            <div className="md:w-1/2 relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-3xl"
                animate={{ rotate: [0, 6, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80" 
                alt="Happy person using phone"
                className="rounded-3xl shadow-2xl relative z-10 border border-white/10"
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Préstamo aprobado</p>
                    <p className="text-sm text-blue-200">En menos de 5 minutos</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </header>
  );
}