const steps = [
  {
    step: '1',
    title: 'Regístrate',
    description: 'Completa el formulario en 2 minutos',
    color: 'blue'
  },
  {
    step: '2',
    title: 'Verifica',
    description: 'Confirma tu identidad rápidamente',
    color: 'emerald'
  },
  {
    step: '3',
    title: 'Solicita',
    description: 'Elige el monto y plazo que necesitas',
    color: 'purple'
  },
  {
    step: '4',
    title: 'Recibe',
    description: 'Obtén tu dinero en tu cuenta bancaria',
    color: 'pink'
  }
];

export function Process() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            ¿Cómo funciona?
          </h2>
          <p className="text-gray-600 text-lg">
            Obtén tu préstamo en 4 simples pasos
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
              )}
              <div className="relative z-10 text-center group">
                <div className={`bg-${item.color}-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform border-2 border-${item.color}-200`}>
                  <span className={`text-2xl font-bold text-${item.color}-600`}>{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}