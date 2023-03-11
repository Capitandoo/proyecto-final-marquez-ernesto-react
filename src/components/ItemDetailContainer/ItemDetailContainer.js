import ItemDetail from "../ItemDetail/ItemDetail";
import {getFirestore, doc, getDoc} from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";




export const ItemDetailContainer = () => {
    const [data, setData] = useState ({});
    const { detalleid } = useParams();

    useEffect(() => {
      const querydb = getFirestore ();
      const queryDoc = doc (querydb, "products", detalleid);
      getDoc (queryDoc)
        .then (res => setData ({id: res.id, ...res.data ()}))
    }, [detalleid]);

  return (
    <ItemDetail data = {data} />
  )
}

export default ItemDetailContainer