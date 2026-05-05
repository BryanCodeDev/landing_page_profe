import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!showButton) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 p-3 bg-blue-800 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
      aria-label="Volver arriba"
    >
      <ArrowUp size={20} />
    </button>
  )
}

export default ScrollToTop