import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Search, BarChart3, FileText, Monitor } from 'lucide-react'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Servysol | Ejercicios Gratis de Word y Excel con Descarga Directa</title>
        <meta name="description" content="Aprende Microsoft Word y Excel con ejercicios prácticos descargables. 28 archivos de práctica en Excel (BUSCARV, SUMAR.SI, fórmulas) y Word. Sin registro, descarga directa." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Servysol",
            "url": "https://servysol.com",
            "description": "Plataforma gratuita de ejercicios de ofimática",
            "teaches": ["Microsoft Excel", "Microsoft Word", "Windows"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Ejercicios de Ofimática",
              "numberOfItems": 32
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-900">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Servysol
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Aprende Microsoft Word y Excel con ejercicios prácticos descargables. 
              Sin registro, sin redirecciones. Descarga directa de archivos .xlsx y .docx.
            </p>
            
          <div className="max-w-md mx-auto relative mb-8" role="search">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} aria-hidden="true" />
            <input
              type="text"
              placeholder="Buscar ejercicios..."
              aria-label="Buscar ejercicios de Excel y Word"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Link to="/excel" className="bg-emerald-600 text-white p-6 rounded-xl hover:bg-emerald-700 transition-colors text-center">
              <div className="flex justify-center mb-2">
                <BarChart3 size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-2">Excel</h2>
              <p className="text-sm opacity-90">28 ejercicios en 11 módulos</p>
            </Link>
            <Link to="/word" className="bg-blue-600 text-white p-6 rounded-xl hover:bg-blue-700 transition-colors text-center">
              <div className="flex justify-center mb-2">
                <FileText size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-2">Word</h2>
              <p className="text-sm opacity-90">4 ejercicios en 2 módulos</p>
            </Link>
            <Link to="/windows" className="bg-amber-600 text-white p-6 rounded-xl hover:bg-amber-700 transition-colors text-center">
              <div className="flex justify-center mb-2">
                <Monitor size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-2">Windows</h2>
              <p className="text-sm opacity-90">Próximamente</p>
            </Link>
          </div>

          <div className="bg-slate-800 text-center py-3 px-6 rounded-full inline-block mx-auto">
            <span className="text-sm text-slate-300">
              28 Archivos Excel · 4 Archivos Word · Descarga Directa · Sin Registro
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home