import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, Shield, FileText, Scale } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';

const policies = [
  {
    icon: FileText,
    title: 'Términos y Condiciones',
    content: [
      'Protección de información personal',
      'Procesamiento seguro de datos',
      'Transparencia en operaciones',
      'Tasas de interés claras y justas',
      'Proceso de aplicación y aprobación',
      'Términos de pago y plazos'
    ]
  },
  {
    icon: Shield,
    title: 'Política de Privacidad',
    content: [
      'No compartimos información con terceros',
      'Encriptación de datos nivel bancario',
      'Control de preferencias de privacidad',
      'Cumplimiento con regulaciones de datos',
      'Almacenamiento seguro de información',
      'Derechos del usuario sobre sus datos'
    ]
  },
  {
    icon: Scale,
    title: 'Responsabilidad Financiera',
    content: [
      'Evaluación justa de capacidad de pago',
      'Transparencia en costos y comisiones',
      'Asesoramiento financiero disponible',
      'Flexibilidad en planes de pago',
      'Prevención de sobreendeudamiento',
      'Proceso de resolución de disputas'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 mr-2" />
            Volver al inicio
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-16">
        <FadeIn>
          <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Políticas y Condiciones
          </h1>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            En FastCash nos comprometemos con la transparencia y la seguridad. 
            Conoce nuestras políticas y términos de servicio.
          </p>
        </FadeIn>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <policy.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{policy.title}</h3>
                <ul className="space-y-3">
                  {policy.content.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-center text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <FadeIn delay={0.6}>
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-8">
              ¿Tienes alguna pregunta sobre nuestras políticas?
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Contáctanos
            </Link>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}