import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { producto } from "../../data";
import { useParams } from "react-router-dom";




export const ItemDetailContainer = () => {
    const [data, setData] = useState ({});
    const { detalleid } = useParams();

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout (() => {
                resolve (producto);
            }, 1000);
        });
        getData.then (res => setData (res.find (producto => producto.id === parseInt (detalleid))));
    }, [detalleid]);

  return (
    <ItemDetail data = {data} />
  )
}

export default ItemDetailContainer