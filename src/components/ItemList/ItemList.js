import Item from "../Item/Item"

const ItemList = ({data = []}) => {
  return (
    data.map (product => <Item key={product.id} info = {product}/>)
  )
}

export default ItemList