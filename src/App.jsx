import { useState } from 'react'
import Hero from './components/Hero'
import Depoimentos from './components/Depoimentos'
import Apresentacao from './components/Apresentacao'
import Funcionalidades from './components/Funcionalidades'
import Formulario from './components/Formulario'
import Footer from './components/Footer'
import './styles.css'

function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Hero />
      <Apresentacao />
      <Depoimentos />
      <Funcionalidades />
      <Formulario />
      <Footer />
   </div>
  )
}

export default App
