
import { FaHeadphonesAlt, FaListUl, FaSearch } from 'react-icons/fa'

function Apresentacao() {
  const beneficios = [
    {
      titulo: 'Qualidade de Som Superior',
      descricao: 'Curta músicas com a melhor qualidade de áudio do mercado, com clareza e potência.',
      icone: <FaHeadphonesAlt className="text-5xl text-indigo-600 mb-4" />,
    },
    {
      titulo: 'Playlists Personalizadas',
      descricao: 'Monte playlists únicas baseadas no seu humor, momento ou preferências musicais.',
      icone: <FaListUl className="text-5xl text-indigo-600 mb-4" />,
    },
    {
      titulo: 'Descubra Novos Artistas',
      descricao: 'Receba recomendações inteligentes e explore novos talentos incríveis.',
      icone: <FaSearch className="text-5xl text-indigo-600 mb-4" />,
    },
  ]

  return (
    <section className="bg-gray-100 py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-14 text-black-800">Por que escolher o Melodia?</h2>

      <div className="grid gap-12 md:grid-cols-3">
        {beneficios.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all flex flex-col items-center"
          >
            {item.icone}
            <h3 className="text-2xl font-semibold mb-2 text-indigo-700">{item.titulo}</h3>
            <p className="text-gray-600">{item.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Apresentacao