import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PostDetail = () => {
  const { postId } = useParams();

  return (
    <>
      <Helmet>
        <title>Detalle - SERVYSOL</title>
        <meta name="description" content="Detalle del ejercicio" />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Volver al inicio
        </Link>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Detalle del ejercicio {postId}</h1>
        <p className="text-gray-600">Contenido del ejercicio no disponible</p>
      </div>
    </>
  );
};

export default PostDetail;