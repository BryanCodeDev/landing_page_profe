import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, FileQuestion } from 'lucide-react'

const PostDetail = () => {
  const { postId } = useParams()

  return (
    <>
      <Helmet>
        <title>Ejercicio {postId} - Servysol</title>
        <meta name="description" content="Detalle del ejercicio" />
      </Helmet>

      <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 py-10 max-w-2xl">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 mb-8 transition-colors"
          >
            <ArrowLeft size={15} />
            Volver al inicio
          </Link>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-10 text-center">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
              <FileQuestion size={26} className="text-slate-400" />
            </div>
            <h1 className="text-xl font-bold text-slate-800 mb-2">
              Ejercicio #{postId}
            </h1>
            <p className="text-sm text-slate-500">
              El contenido de este ejercicio no está disponible aún.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default PostDetail