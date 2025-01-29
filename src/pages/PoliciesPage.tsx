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
      
      
      <PrivacyNotice/>
      <TermsAndConditions/>
      <PoliticasFastCash/>

      
      
        {/* <FadeIn>
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
        </FadeIn> */}
      </main>
    </div>
  );
}




const PoliticasFastCash = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Políticas de Fast Cash Ejemplo</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">¿Qué ofrece FastCash en términos de préstamos?</h2>
        <ul className="list-disc pl-5 mt-2">
          <li>Cantidad de préstamo de $500 a $28,000</li>
          <li>Plazo de préstamo de 91 días a 180 días</li>
          <li>Tasa de interés máxima del 30% APR por año</li>
          <li>Sin cargos de servicio y sin otros cargos</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Ejemplo de préstamo</h2>
        <p>Para un préstamo de $2,000 en 91 días, pagarías:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Tasa de interés mensual: 2.5%</li>
          <li>Intereses mensuales: $50</li>
          <li>Total a pagar mensualmente: $716.66</li>
          <li>Total de intereses: $151.66</li>
          <li>Total a pagar: $2,151.66</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Pasos para obtener un préstamo</h2>
        <ol className="list-decimal pl-5 mt-2">
          <li>Descarga la aplicación Fast Cash APK/IOS</li>
          <li>Completa tus datos</li>
          <li>Espera la aprobación</li>
          <li>Recibe tu préstamo</li>
        </ol>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Accede rápidamente al capital</h2>
        <p>Si eres ciudadano de México mayor de 18 años, tienes un trabajo estable y una identificación válida, cumples con los requisitos para solicitar un préstamo.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Contacta con nosotros</h2>
        <p>Email: phongphucash.cs@hotmail.com</p>
        <p>Dirección: C. de Venustiano Carranza, Centro Histórico, Ciudad de México</p>
      </section>
    </div>
  );
};

const PrivacyNotice = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Aviso de Privacidad</h1>
      <p className="mb-4">
        De conformidad con lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, <strong>ROCLAU, S.A. de C.V.</strong> pone a su disposición el siguiente aviso de privacidad.
      </p>
      <p className="mb-4">
        ROCLAU, S.A. de C.V., es responsable del uso y protección de sus datos personales. A través de este instrumento se informa a los titulares de los datos la información que de ellos se recaba y los fines que se le darán a dicha información.
      </p>
      <h2 className="text-xl font-semibold mt-4">Datos personales recabados</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Nombre</li>
        <li>Nacionalidad</li>
        <li>Domicilio</li>
        <li>Fecha de nacimiento</li>
        <li>Teléfono</li>
        <li>CURP</li>
        <li>Cuenta bancaria</li>
      </ul>
      <h2 className="text-xl font-semibold mt-4">Finalidades</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Integrar el expediente único de solicitante de crédito</li>
        <li>Seguimiento de créditos y cobranza</li>
      </ul>
      <h2 className="text-xl font-semibold mt-4">Derechos ARCO</h2>
      <p className="mb-4">
        Usted tiene derecho a conocer qué datos personales tenemos de usted, así como a solicitar su rectificación, cancelación u oponerse a su uso. Para ejercer estos derechos, envíe su solicitud al correo electrónico:
        <strong> atencion_clientes@fastcashmx.com</strong>.
      </p>
      <p className="text-sm text-gray-600 mt-6">Última actualización: 01/01/2025</p>
    </div>
  );
};

const TermsAndConditions = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">
        Política de Divulgación de Términos y Condiciones de Uso de FastCash
      </h1>
      <p className="text-gray-600 mb-4">Última actualización: 25 de enero de 2025</p>
      <p className="mb-4">
        Bienvenido a <strong>FastCash</strong>. Al utilizar esta aplicación, aceptas los presentes Términos y Condiciones, así como nuestra Política de Privacidad. Te recomendamos leerlos detenidamente antes de usar los servicios. Si no estás de acuerdo, no deberás utilizar la aplicación.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. Información General</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Montos disponibles: Entre $2,000 y $20,000 MXN.</li>
        <li>Tasas de interés: Entre 16.2% y 30% anuales, según perfil crediticio.</li>
        <li>Plazos de pago: Mínimo de 7 días y máximo de 365 días.</li>
        <li>El proceso es 100% digital y puede completarse en menos de 10 minutos.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">2. Requisitos para Solicitar un Préstamo</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Ser ciudadano mexicano mayor de 18 años.</li>
        <li>Contar con una identificación oficial válida.</li>
        <li>Tener una cuenta bancaria activa en México a su nombre.</li>
        <li>Proporcionar información personal y financiera verificable.</li>
        <li>Aceptar la consulta en burós de crédito.</li>
        <li>Aceptar los términos y condiciones, así como el aviso de privacidad.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">3. Proceso de Solicitud</h2>
      <ul className="list-decimal pl-6 mb-4">
        <li>Registro: Crea una cuenta y proporciona la información requerida.</li>
        <li>Evaluación de crédito: Se analizará tu información y historial.</li>
        <li>Aprobación: Recibirás los términos específicos para aceptarlos.</li>
        <li>Desembolso: El monto será transferido a tu cuenta bancaria.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">4. Tasas, Cargos y Ejemplo Representativo</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Tasa de interés anual (CAT): Entre 16.2% y 30%, según perfil.</li>
        <li>Posibles cargos por pagos tardíos o gastos de cobranza.</li>
      </ul>
      <p className="mb-4">
        <strong>Ejemplo:</strong> Préstamo de $5,000 MXN a 180 días con tasa del 20% anual:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Intereses totales: $500 MXN.</li>
        <li>Pago mensual estimado: $916.67 MXN.</li>
        <li>Total a pagar: $5,500 MXN.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">5. Obligaciones del Usuario</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Proporcionar información veraz y actualizada.</li>
        <li>Cumplir con los pagos en las fechas establecidas.</li>
        <li>Usar la app de manera responsable.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">6. Proceso de Cobranza</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>FastCash podrá comunicarse contigo en caso de incumplimiento.</li>
        <li>Pueden aplicarse cargos por pagos tardíos.</li>
        <li>Se podrá reportar tu situación a burós de crédito.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">7. Protección de Datos Personales</h2>
      <p className="mb-4">
        FastCash cumple con la Ley Federal de Protección de Datos Personales. Consulta nuestro Aviso de Privacidad para más detalles.
      </p>

      <h2 className="text-xl font-semibold mt-6">8. Requisitos para Publicación en Google Play Store</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Se garantiza transparencia en tasas de interés y plazos.</li>
        <li>La app incluye enlaces directos a términos y condiciones.</li>
        <li>Se opera conforme a la legislación mexicana.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">9. Limitaciones de Responsabilidad</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>FastCash no se hace responsable de decisiones de crédito.</li>
        <li>No responde por retrasos debido a problemas bancarios.</li>
        <li>El usuario es responsable del uso adecuado de la app.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">10. Modificaciones</h2>
      <p className="mb-4">
        Nos reservamos el derecho de actualizar estos términos en cualquier momento. Se notificará a los usuarios mediante la aplicación.
      </p>

      <h2 className="text-xl font-semibold mt-6">11. Contacto</h2>
      <p className="mb-4">
        Para consultas, comunícate con nosotros en: 
        <strong> atencion_clientes@fastcashmx.com</strong> o al teléfono <strong>+52 771 712 3903</strong>.
      </p>

      <p className="text-sm text-gray-600 mt-6">Última actualización: 25 de enero de 2025</p>
    </div>
  );
};

