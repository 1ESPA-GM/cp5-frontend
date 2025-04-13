function Funcionalidades() {
    const features = [
      { title: 'Recomendações Inteligentes', desc: 'Sistema que aprende com você.' },
      { title: 'Modo Offline', desc: 'Ouça suas músicas sem precisar de internet.' },
      { title: 'Compartilhamento Fácil', desc: 'Compartilhe faixas com um clique.' }
    ]
  
    return (
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Funcionalidades</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="border p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }

  export default Funcionalidades