import {useCartContext} from "../../context/CartContext";
import { Link } from "react-router-dom";
import carrito from "../../imgs/carrito.svg"
import "./cartwidget.css";

export const CartWidget = () => {
    const {totalProduct} = useCartContext ();

    return (
        <div className="cart">
        <Link to = "/cart"><img src = {carrito} alt = "" className="imgCarrito"></img></Link>
        <span className= {totalProduct () ? "seeTexto" : null} >{totalProduct () || ''}</span>
        </div>
    );
};

export default CartWidget;