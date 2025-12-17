import { Link } from "react-router-dom"

function Navbar() {
    const valor = 25;
    return(
        <nav>
            <Link to="/">Sallllllludo</Link>
            <Link to="/hola">Hollllllla</Link>
            <Link to="/mensaje">Menssssssaje</Link>
            <Link to={`/parametros/${valor}`}>PARAMETROS</Link>
            <Link to="/articulo">--REGISTRAR_ARTICULOS</Link>
        </nav>
    )
}
export default Navbar