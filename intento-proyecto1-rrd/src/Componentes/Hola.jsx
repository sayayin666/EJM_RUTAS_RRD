import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar"

function Hola() {
    const navigate = useNavigate()
    function llevar() {
        navigate("/msj")
    }
    return(
        <div>
            <h1>este es mi componente Hola</h1>
            <button onClick={llevar}>click-llevar</button>
        </div>
    )
}
export default Hola