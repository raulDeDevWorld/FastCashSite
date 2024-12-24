import { ChevronRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">¿Listo para comenzar?</h2>
          <p className="text-xl mb-12 text-blue-100">
            Obtén tu préstamo hoy mismo y cumple tus objetivos financieros
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all flex items-center justify-center">
              Solicitar préstamo ahora
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-blue-500/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-500/30 transition-colors border border-white/20">
              Hablar con un asesor
            </button>
          </div>
          <p className="mt-8 text-blue-200 text-sm">
            Sin compromiso • Respuesta inmediata • Soporte 24/7
          </p>
        </div>
      </div>
    </section>
  );
}