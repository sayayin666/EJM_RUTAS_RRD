import { useEffect, useState, } from "react"
import { useNavigate } from "react-router-dom"

function Articulo() {
    const [id, setId] = useState(0)
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState(0)
    const [stock, setStock] = useState(0)
    const [categoria, setCategoria] = useState("")
    const [estado, setEstado] = useState(true)
    const [datos, setDatos] = useState([])

    async function guardar(ext) {
        ext.preventDefault()
        await fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/articulo',{
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998"
            },
            body:JSON.stringify({nombre:nombre, descripcion:descripcion, precio:precio, stock:stock, categoria:categoria, estado:estado})
        })
        // recargar datos
        listado()

        //limpiar inputs
        setNombre("")
        setDescripcion("")
        setPrecio("")
        setStock("")
        setCategoria("")
        setEstado("")

    }
    useEffect(() => {
        listado()
    }, [])
    async function listado() {
        const dats = await fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/articulo', {
            method: 'GET',
            headers: {
                "Content-Type":"application/json",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998"
            },
        })
        const resps = await dats.json() // para mostrar
        setDatos(resps) // para guardar
    }

    const navigate = useNavigate()
    function editar() {
        navigate("/editar")
    }

    function actualizar() {
        navigate("/articulo")
    }

    return(
        <div>
            <h1>REGISTRA TU ARTICULO AQUI</h1>
            <form onSubmit={guardar}>
                <input type="text" placeholder="nombre" required onChange={(e) => setNombre(e.target.value)}/>
                <input type="text" placeholder="descripcion" required onChange={(e) => setDescripcion(e.target.value)}/>
                <input type="text" placeholder="precio" required onChange={(e) => setPrecio(e.target.value)}></input>
                <input type="text" placeholder="stock" required onChange={(e) => setStock(e.target.value)}></input>
                <input type="text" placeholder="categoria" required onChange={(e) => setCategoria(e.target.value)}></input>
                <button onClick={editar}>Actualizar</button>
                <button type="submit" onClick={actualizar}>Regisrar</button>
            </form>
             <h2>ARTICULOS REGISTRADOS</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((mx) => (
                        <tr>
                            <td>{mx.nombre}</td>
                            <td>{mx.descripcion}</td>
                            <td>{mx.precio}</td>
                            <td>{mx.stock}</td>
                            <td>{mx.categoria}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Articulo;