import { useNavigate } from "react-router-dom"
import Articulo from "./Articulo"

function Editar() {

    function actualizar() {

    }

    const navigate = useNavigate()
    function llevar(id) {
        navigate(`/articulo/${id}`)
    }
    return(
        <div>
            {}
        </div>
    )
}
export default Editar