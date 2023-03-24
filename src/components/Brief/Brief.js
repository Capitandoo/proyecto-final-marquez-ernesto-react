import { useContext } from "react";
import { Link } from "react-router-dom";
import {UserContext} from "../../context/UserContext";
import { useCartContext } from "../../context/CartContext";


const Brief = () => {

    const {un} = useContext (UserContext);
    const {clearCart} = useCartContext ();
    


  return (
    <div>
      {<p>La compra fue exitosa con el numero: {un}</p>}
      <Link to ="/"><button onClick={clearCart}>Finalizar</button></Link>
    </div>
  )
}

export default Brief;