export function Policies() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Políticas y Condiciones de Servicio</h2>
          
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Términos y Condiciones</h3>
              <div className="prose text-gray-600">
                <p>Al utilizar FastCash, aceptas nuestros términos y condiciones de servicio. Nos comprometemos a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proteger tu información personal</li>
                  <li>Procesar tus datos de forma segura</li>
                  <li>Mantener la transparencia en nuestras operaciones</li>
                  <li>Proporcionar tasas de interés claras y justas</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Política de Privacidad</h3>
              <div className="prose text-gray-600">
                <p>Tu privacidad es nuestra prioridad. Nos comprometemos a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>No compartir tu información con terceros sin tu consentimiento</li>
                  <li>Utilizar encriptación de datos de nivel bancario</li>
                  <li>Permitirte controlar tus preferencias de privacidad</li>
                  <li>Cumplir con todas las regulaciones de protección de datos</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Responsabilidad Financiera</h3>
              <div className="prose text-gray-600">
                <p>Promovemos el uso responsable de nuestros servicios financieros:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Evaluación justa de capacidad de pago</li>
                  <li>Transparencia en costos y comisiones</li>
                  <li>Asesoramiento financiero disponible</li>
                  <li>Flexibilidad en planes de pago</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}