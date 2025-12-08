import { Link } from "react-router-dom"

function Navbar() {
    const valor = 25;
    return(
        <nav>
            <Link to="/">Saludo</Link>
            <Link to="/hola">Hola</Link>
            <Link to="/mensaje">Mensaje</Link>
            <Link to={`/parametros/${valor}`}></Link>
        </nav>
    )
}
export default Navbar