import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'

export const ScrollToTop = () => {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 350)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Volver arriba"
      className={`
        fixed bottom-6 right-6 z-40 p-3 rounded-full
        bg-slate-900 text-white shadow-lg
        hover:bg-blue-600 hover:scale-110 active:scale-95
        transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
    >
      <ArrowUp size={18} />
    </button>
  )
}

export default ScrollToTop