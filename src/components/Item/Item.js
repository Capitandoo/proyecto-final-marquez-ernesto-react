import { Link } from "react-router-dom";
import "./item.css";

const Item = ({info}) => {
  return (
    <div className="card" key={info.id}>                    
    <img src = {info.img} alt = "imagen producto" />
    <h3>{info.nombre}</h3>
    <Link to = {`/detalle/${info.id}`} >Ver Detalle</Link>
</div>
  )
};

export default Item;