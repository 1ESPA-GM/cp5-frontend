import Musica from './routes/Musica'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
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
     <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Hero />
              <Apresentacao />
              <Depoimentos />
              <Funcionalidades />
              <Formulario />
              <Footer />
            </>
          }
        />
        <Route path="/musica" element={<Musica />} />
      </Routes>
   </div>
  )
}

export default App
