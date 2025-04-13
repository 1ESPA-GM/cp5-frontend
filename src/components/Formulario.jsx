function Formulario() {
    return (
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Fique por dentro das novidades</h2>
        <p className="mb-8">Cadastre seu e-mail e receba atualizações e ofertas exclusivas.</p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Seu e-mail"
            className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Enviar
          </button>
        </form>
      </section>
    )
  }
export default Formulario