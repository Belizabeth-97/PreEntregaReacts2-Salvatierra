import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"


function NavBar (){
    return (
        <nav className="flex flex-row justify-end gap-8">
            <Link to="">Inicio</Link>
            <Link to="/Menu">Menú</Link>
            <Link to="/Contacto">Contacto</Link>
            <CartWidget></CartWidget>
        </nav>
    )
}


export default NavBar