import { Shield, Clock3, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Clock3,
    title: 'Rápido y Simple',
    description: 'Recibe tu dinero en menos de 24 horas. Proceso 100% digital.',
    gradient: 'from-blue-400 to-blue-600'
  },
  {
    icon: Shield,
    title: '100% Seguro',
    description: 'Tu información está protegida con los más altos estándares de seguridad.',
    gradient: 'from-emerald-400 to-emerald-600'
  },
  {
    icon: Smartphone,
    title: 'Todo desde tu celular',
    description: 'Gestiona tu préstamo desde cualquier lugar con nuestra app móvil.',
    gradient: 'from-purple-400 to-purple-600'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            ¿Por qué elegir FastCash?
          </h2>
          <p className="text-gray-600 text-lg">
            Nuestra plataforma está diseñada para brindarte la mejor experiencia en préstamos en línea
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className={`bg-gradient-to-r text-center  ${feature.gradient} w-16 relative  right-0 left-0 mx-auto h-16 text-center rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-8 w-8 text-white relative right-0 left-0 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}         