import sadImg from '../assets/sad.jpg'
import compartilhaImg from '../assets/compartilha.jpg'
import offlineImg from '../assets/offline.jpg'


function Funcionalidades() {
    const funcionalidades = [
      {
        titulo: 'Compartilhamento Fácil',
        descricao: 'Compartilhe faixas com um clique.',
        imagem: compartilhaImg,
      },
      {
        titulo: 'Descoberta de Novos Artistas',
        descricao: 'Explore novas vozes e gêneros musicais com recomendações inteligentes.',
        imagem: sadImg,
      },
      {
        titulo: 'Modo Offline',
        descricao: 'Ouça suas músicas sem precisar de internet.',
        imagem: offlineImg,
      },
    ]
  
    return (
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">Funcionalidades do Melodia</h2>
  
        <div className="grid gap-12 md:grid-cols-3">
          {funcionalidades.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center"
            >
              <img
                src={item.imagem}
                alt={item.titulo}
                className="h-56 w-auto rounded-xl object-cover mb-6 shadow-md"
              />
              <h3 className="text-xl font-semibold mb-2">{item.titulo}</h3>
              <p className="text-gray-600">{item.descricao}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Funcionalidades