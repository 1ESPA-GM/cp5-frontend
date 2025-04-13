function Depoimentos() {
    const users = [
      { name: 'Lucas', text: 'O melhor app de música que já usei!', img: './src/assets/user1.jpg' },
      { name: 'Ana', text: 'Playlists incríveis e fáceis de criar.', img: './src/assets/user2.jpg' },
      { name: 'Carlos', text: 'Adoro como ele recomenda novos sons pra mim!', img: './src/assets/user3.jpg' },
    ]
  
    return (
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10 text-emerald-800">O que estão dizendo?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {users.map((u, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <img src={u.img} alt={u.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="italic text-gray-700">"{u.text}"</p>
              <p className="mt-2 font-semibold">{u.name}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }

  export default Depoimentos