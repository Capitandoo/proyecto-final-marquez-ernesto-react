import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./itemDetail.css";

const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart] = useState (false);
  const {addProduct} = useCartContext ();

  const onadd = (quantity) => {
    setGoToCart (true);
    addProduct (data, quantity);
};

  return (
    
    <div className="tarjeta" key={data.id}>             
      <img src = {data.img} alt = "imagen producto" />
      <h3>{data.nombre}</h3>
      <h4>${data.precio}</h4>
      <div className="contenedor-compra">
      {
        goToCart ? <Link to = "/cart" className="compra">Terminar compra</Link> : <ItemCount initial={1} stock={6} onadd={onadd}/>
      }
      </div>
    </div>
  )
}

export default ItemDetail;