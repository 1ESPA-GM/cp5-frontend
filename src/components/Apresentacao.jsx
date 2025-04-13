

function Apresentacao() {
  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Por que escolher o Melodia?</h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-xl mb-2">Qualidade de Som Superior</h3>
          <p>Curta músicas com a melhor qualidade de áudio do mercado.</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-xl mb-2">Playlists Personalizadas</h3>
          <p>Monte playlists com base no seu humor ou momento.</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-xl mb-2">Descubra Novos Artistas</h3>
          <p>Explore novas vozes e estilos musicais que você vai amar.</p>
        </div>
      </div>
    </section>
  )
}

export default Apresentacao