import { useNavigate } from 'react-router-dom'
import heroImg from '../assets/hero2.png'

function Hero() {
  const navigate = useNavigate()
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Melodia: <br /> <span className="text-yellow-300">Sua Música, Sua Forma</span>
          </h1>
          <p className="text-lg mb-6">
            Descubra músicas novas, crie playlists únicas e mergulhe em uma experiência sonora incrível.
          </p>
          <button
            onClick={() => navigate('/musica')}
            className="bg-yellow-400 text-indigo-900 font-bold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
          >
            Ouvir Agora
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
        <div className="absolute w-[450px] h-[450px] bg-gradient-to-br from-purple-500 via-indigo-400 to-fuchsia-500 opacity-80 rounded-full blur-[180px] z-0"></div>
          <img
            src={heroImg}
            alt="App Melodia"
            className="w-72 md:w-96 relative z-10"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
