import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold tracking-wide">
          Melodia
        </Link>
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="text-white hover:text-yellow-400 transition font-medium">Início</Link>
          <Link to="/musica" className="text-white hover:text-yellow-400 transition font-medium">Músicas</Link>
          <a href="#funcionalidades" className="text-white hover:text-yellow-400 transition font-medium">Funcionalidades</a>
          <a href="#contato" className="text-white hover:text-yellow-400 transition font-medium">Contato</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar