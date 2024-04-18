import CartWidget from "./CartWidget"


function NavBar (){
    return (
        <nav className="flex flex-row justify-end gap-8">
            <a href="#">Menú</a>
            <a href="#">Productos</a>
            <a href="#">Contacto</a>
            <CartWidget></CartWidget>
        </nav>
    )
}

export default NavBar