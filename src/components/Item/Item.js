import { Link } from "react-router-dom";
import "./item.css";

const Item = ({info}) => {
  return (
    <div className="card" key={info.id}>                    
    <img src = {info.img} alt = "imagen producto" />
    <h3>{info.nombre}</h3>
    <button><Link to = {`/detalle/${info.id}`} className="link">Ver Detalle</Link></button>
</div>
  )
};

export default Item;