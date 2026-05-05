import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, FileSpreadsheet, FileText, Monitor } from 'lucide-react';

const NotFound = () => {
  const quickLinks = [
    { to: '/', label: 'Inicio', icon: Home },
    { to: '/excel', label: 'Ejercicios Excel', icon: FileSpreadsheet },
    { to: '/word', label: 'Ejercicios Word', icon: FileText },
    { to: '/windows', label: 'Ejercicios Windows', icon: Monitor },
  ];

  return (
    <>
      <Helmet>
        <title>404 - Página no encontrada | SERVYSOL</title>
        <meta name="description" content="Página no encontrada. Explora nuestros ejercicios de Excel, Word y Windows." />
      </Helmet>
      <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
        <div className="max-w-2xl w-full text-center">
          {/* Ilustración 404 */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-gray-200 select-none">404</h1>
            <div className="relative -mt-16 mb-4">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-100 mb-4">
                <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Mensaje */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Página no encontrada
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Lo sentimos, la página que buscas no existe o ha sido movida. 
            Puedes volver al inicio o explorar nuestras secciones de ejercicios.
          </p>

          {/* Enlaces rápidos */}
          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto mb-8">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all group"
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-sm">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Enlace adicional */}
          <p className="text-sm text-gray-500">
            ¿Necesitas ayuda?{' '}
            <a href="mailto:contacto@servysol.com" className="text-blue-600 hover:underline">
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;