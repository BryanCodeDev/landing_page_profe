import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { BarChart3, FileText, Monitor } from 'lucide-react'

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
      
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 border border-blue-500/30 px-4 py-1.5 rounded-full">
                Plataforma Educativa Gratuita
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              <span className="bg-linear-to-r from-white via-blue-100 to-slate-200 bg-clip-text text-transparent">
                Servysol
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Aprende Microsoft Word y Excel con ejercicios prácticos descargables. 
              Sin registro, sin redirecciones. Descarga directa de archivos .xlsx y .docx.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Link to="/excel" className="group bg-linear-to-br from-emerald-500 to-emerald-700 text-white p-8 rounded-2xl hover:from-emerald-600 hover:to-emerald-800 transition-all duration-300 text-center hover:shadow-2xl hover:-translate-y-1 border border-emerald-400/20">
              <div className="flex justify-center mb-4">
                <BarChart3 size={40} className="group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Excel</h2>
              <p className="text-sm opacity-90 font-medium">28 ejercicios en 11 módulos</p>
            </Link>
            <Link to="/word" className="group bg-linear-to-br from-blue-500 to-blue-700 text-white p-8 rounded-2xl hover:from-blue-600 hover:to-blue-800 transition-all duration-300 text-center hover:shadow-2xl hover:-translate-y-1 border border-blue-400/20">
              <div className="flex justify-center mb-4">
                <FileText size={40} className="group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Word</h2>
              <p className="text-sm opacity-90 font-medium">4 ejercicios en 2 módulos</p>
            </Link>
            <Link to="/windows" className="group bg-linear-to-br from-amber-500 to-amber-700 text-white p-8 rounded-2xl hover:from-amber-600 hover:to-amber-800 transition-all duration-300 text-center hover:shadow-2xl hover:-translate-y-1 border border-amber-400/20">
              <div className="flex justify-center mb-4">
                <Monitor size={40} className="group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Windows</h2>
              <p className="text-sm opacity-90 font-medium">Próximamente</p>
            </Link>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-center py-4 px-8 rounded-full inline-block mx-auto">
            <span className="text-sm text-slate-300 font-medium">
              28 Archivos Excel · 4 Archivos Word · Descarga Directa · Sin Registro
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home