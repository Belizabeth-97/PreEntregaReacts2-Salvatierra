import NavBar from "./NavBar"
import Logo from "/hamburguesa.png"

function Header () {
    return (
        <header className=" bg-amber-400 p-6 flex-colums">
            <img src={Logo} alt="" className="h-14"></img>
            <NavBar></NavBar>
        </header>
    )
}

export default Header