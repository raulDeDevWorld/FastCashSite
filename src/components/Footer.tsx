import { Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Wallet className="h-8 w-8" />
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                FastCash
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Tu solución financiera rápida y segura. Estamos aquí para ayudarte a alcanzar tus metas.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-lg">Empresa</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link to="/policies" className="hover:text-white transition-colors">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link to="/policies" className="hover:text-white transition-colors">
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-lg">Ayuda</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Preguntas frecuentes</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contacto</li>
              <li className="hover:text-white transition-colors cursor-pointer">Soporte</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-lg">Contacto</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center">
                <span className="hover:text-white transition-colors cursor-pointer">
                  info@FastCash.com
                </span>
              </li>
              <li className="flex items-center">
                <span className="hover:text-white transition-colors cursor-pointer">
                  +1 (555) 123-4567
                </span>
              </li>
              <li>Lunes a Viernes 9am - 6pm</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FastCash. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}