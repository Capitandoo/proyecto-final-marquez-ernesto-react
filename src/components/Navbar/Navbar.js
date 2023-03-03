import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import carrito from "../../imgs/carrito.svg"
import "./navbar.css";

const Navbar = () => {
    return (
        <div className = "nav-container">
            <nav className = "navbar">
                <Link to = "/" className="link-logo"><h1 className = "navbar-logo">Lole Sier</h1></Link>
                <Link to = "/categoria/cremas" className="opcion">Cremas</Link>
                <Link to = "/categoria/lociones" className="opcion">Lociones</Link>
                <CartWidget>
                    <Link to = "/cart"><img src = {carrito} alt = "" className="imgCarrito"></img></Link>
                    <h2 className="seeTexto">0</h2>
                </CartWidget>
            </nav>
        </div>
    );
};

export default Navbar;