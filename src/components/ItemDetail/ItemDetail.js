import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./itemDetail.css";

const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart] = useState (false);

  const onadd = (quantity) => {
    setGoToCart (true);
};

  return (
    
    <div className="card" key={data.id}>             
                            <img src = {data.img} alt = "imagen producto" />
                            <h3>{data.nombre}</h3>
                            <h4>${data.precio}</h4>
                            <h4>{data.cantidad}</h4>
                            <button>Comprar</button>
                            {
                              goToCart ? <Link to = "/cart">Terminar compra</Link> : <ItemCount initial={1} stock={6} onadd={onadd}/>
                            }
                            </div>
  )
}

export default ItemDetail;