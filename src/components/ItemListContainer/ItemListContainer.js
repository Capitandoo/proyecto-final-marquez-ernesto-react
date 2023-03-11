import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
//import {producto} from "../../data";
import { useParams } from "react-router-dom";



export const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const {categoriaid} = useParams();

    useEffect(() => {
        const querydb = getFirestore ();
        const queryCollection = collection (querydb, "products");
        if (categoriaid) {
            const queryFilter = query (queryCollection, where ("categoria", "==", categoriaid))
            getDocs (queryFilter)
                .then (res => setData (res.docs.map (product => ({id: product.id, ...product.data ()}))))
        } else {
            getDocs (queryCollection)
            .then (res => setData (res.docs.map (product => ({id: product.id, ...product.data ()}))))
        }
    }, [categoriaid]);

    return (
        <div className="product-card-container">
            <ItemList data = {data}/>            
        </div>
    )
};

export default ItemListContainer;