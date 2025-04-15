import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Musica() {
  const [curtidas, setCurtidas] = useState({})
  const navigate = useNavigate() 
  const toggleCurtida = (index) => {
    setCurtidas((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const musicas = [
    {
      nome: 'Noite de Estrelas',
      artista: 'DJ Astro',
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      nome: 'Chuva Suave',
      artista: 'Lofi Dreams',
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },
    {
      nome: 'Luz da Manhã',
      artista: 'Aurora Beats',
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-indigo-900 text-white px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
          alt="Playlist Cover"
          className="w-64 h-64 mx-auto mb-8 rounded-2xl object-cover shadow-2xl"
        />

        <h1 className="text-4xl text-yellow-400 font-bold mb-2">🎵 Vibrações do Melodia</h1>
        <p className="text-yellow-200 mb-10">Curta a playlist e mergulhe no som!</p>

        <button
          onClick={() => navigate('/')}
          className="mb-10 bg-yellow-400 text-purple-800 font-semibold px-6 py-3 rounded-full hover:bg-purple-100 transition"
        >
        ⬅ Voltar para a Home
        </button>

        <div className="space-y-6">
          {musicas.map((musica, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between bg-white bg-opacity-10 backdrop-blur-md p-5 rounded-xl shadow-lg"
            >
              <div className="text-left mb-4 md:mb-0 md:w-1/3">
                <h2 className="text-xl font-semibold">{musica.nome}</h2>
                <p className="text-purple-200">{musica.artista}</p>
              </div>

              <audio controls className="w-full md:w-1/2">
                <source src={musica.src} type="audio/mpeg" />
                Seu navegador não suporta áudio.
              </audio>

              <button
                onClick={() => toggleCurtida(index)}
                className="ml-4 text-2xl text-pink-400 hover:text-pink-500 transition"
              >
                {curtidas[index] ? <FaHeart /> : <FaRegHeart />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Musica