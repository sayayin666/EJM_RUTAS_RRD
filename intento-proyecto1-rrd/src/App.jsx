import './App.css'
import Hola from './Componentes/Hola'
import Saludo from './Componentes/Saludo'
import Mensaje from './Componentes/Mensaje'
import Navbar from './Componentes/Navbar'
import Parametros from './Componentes/Parametros'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Articulo from './Componentes/Articulo'
import Editar from './Componentes/Editar'

function App() {

  return (
    
      <>
      <Navbar />
        <Routes>
          <Route path='/hola' element={<Hola></Hola>}></Route>
          <Route path='/' element={<Saludo></Saludo>}></Route>
          <Route path='/mensaje' element={<Mensaje></Mensaje>}></Route>
          <Route path='/parametros/:id' element={<Parametros></Parametros>}></Route>
          <Route path='/articulo' element={<Articulo></Articulo>}></Route>
          <Route path='/editar/:id' element={<Editar></Editar>}></Route>
        </Routes>
      </>
    
  )
}

export default App
