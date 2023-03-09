import { useState, useEffect } from "react";
import "./itemCount.css"


const ItemCount = ({initial, stock, onadd}) => {
    const [count, setCount] = useState (parseInt(initial));
    
    const decrease = () => {
        setCount (count-1)
    };

    const increase = () => {
        setCount (count+1)
    };

    useEffect (() => {
        setCount (parseInt(initial));
    }, [initial]);

  return (
    <div className="counter">
        <button className="resta" disabled={count <= 1} onClick={decrease}>-</button>
        <span>{count}</span>
        <button className="suma" disabled={count >= stock} onClick={increase}>+</button>
        <div className="contenedor-boton">
            <button className="boton"  disabled={count <= 0} onClick={() => onadd (count)} >
                Agregar al carrito
            </button>
        </div>
    </div>
  )
}

export default ItemCount;