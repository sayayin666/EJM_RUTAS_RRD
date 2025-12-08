import './App.css'
import Hola from './Componentes/Hola'
import Saludo from './Componentes/Saludo'
import Mensaje from './Componentes/Mensaje'
import Navbar from './Componentes/Navbar'
import Parametros from './Componentes/Parametros'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    
      <>
      <Navbar />
        <Routes>
          <Route path='/hola' element={<Hola></Hola>}></Route>
          <Route path='/' element={<Saludo></Saludo>}></Route>
          <Route path='/mensaje' element={<Mensaje></Mensaje>}></Route>
          <Route path='/parametros/:id' element={<Parametros></Parametros>}></Route>
        </Routes>
      </>
    
  )
}

export default App
