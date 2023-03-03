import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import {producto} from "../../data";
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const {categoriaid} = useParams();

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout (() => {
                resolve (producto);
            }, 1000);
        });
        if (categoriaid) {
            getData.then (res => setData (res.filter (product => product.categoria === categoriaid)));
        } else {
            getData.then (res => setData (res));
        }
    }, [categoriaid]);

    return (
        <div className="product-card-container">
            <ItemList data = {data}/>
        </div>
    )
};

export default ItemListContainer;