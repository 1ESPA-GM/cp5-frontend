function Hero() {
    return (
      <section className="bg-gradient-to-r from-blue-900 to-emerald-600 text-white px-6 py-20 text-center">

        <h1 className="text-5xl font-bold mb-4">Melodia</h1>
        <p className="text-lg mb-6">Descubra novos sons, crie playlists e curta cada batida com qualidade superior.</p>
        <button className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-gray-100 transition">
          Ouvir Agora
        </button>
        <div className="mt-10">
          <img src="./src/assets/capa.jpg" alt="Demonstração do App" className="mx-auto rounded-lg shadow-2xl max-w-md" />
        </div>
      </section>
    )
  }

  export default Hero