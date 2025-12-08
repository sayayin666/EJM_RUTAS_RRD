import { useParams } from "react-router-dom"

function Parametros() {
    const {id} = useParams();
    return(
        <div>
            <h1>Parametros</h1>
            <h2>el id es: {id}</h2>
        </div>
    )
}
export default Parametros