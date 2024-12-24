import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'María G.',
    text: 'Excelente servicio, obtuve mi préstamo en menos de 1 día. El proceso fue muy sencillo y el equipo de soporte muy amable.',
    image: 'https://i.pravatar.cc/100?img=5'
  },
  {
    name: 'Carlos R.',
    text: 'Proceso muy sencillo y transparente. Lo recomiendo totalmente. Las tasas son justas y el servicio al cliente es excepcional.',
    image: 'https://i.pravatar.cc/100?img=6'
  },
  {
    name: 'Ana P.',
    text: 'La mejor opción para préstamos rápidos. Sin complicaciones. Me ayudaron cuando más lo necesitaba.',
    image: 'https://i.pravatar.cc/100?img=7'
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 text-lg">
            Miles de personas ya confían en nosotros para sus necesidades financieras
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}