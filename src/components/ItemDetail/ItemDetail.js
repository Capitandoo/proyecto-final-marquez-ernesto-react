import "./itemDetail.css";

const ItemDetail = ({data}) => {
  return (
    
    <div className="card" key={data.id}>             
                            <img src = {data.img} alt = "imagen producto" />
                            <h3>{data.nombre}</h3>
                            <h4>${data.precio}</h4>
                            <h4>{data.cantidad}</h4>
                            <button>Comprar</button>
                            </div>
  )
}

export default ItemDetail;