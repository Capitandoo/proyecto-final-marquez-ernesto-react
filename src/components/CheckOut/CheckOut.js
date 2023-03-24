import { useContext, useEffect, useState } from "react";
import {UserContext} from "../../context/UserContext";
import { getFirestore, doc, getDoc, collection, addDoc } from "firebase/firestore";
import { useCartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";


const CheckOut = () => {
    const {id, setUn} = useContext (UserContext);
    const {cart, totalPrice} = useCartContext ();
    const [cliente, setCliente] = useState ({});
    
    useEffect (() => {
        const db = getFirestore ();
        const querydb = doc (db, "contactform", id);
        getDoc (querydb)
        .then ((snapshot) => {
            const obj = {
                id: snapshot.id,
                ...snapshot.data(),
            };
            setCliente (obj);
        });
    }, [id]);
    
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    
    const order = {
        buyer: {
            name: cliente.name,
            email: cliente.email,
            phone:cliente.phone,
            address: cliente.address
        },
        items: cart.map (product => ({ id: product.id, nombre: product.nombre, precio: product.precio, cantidad: product.quantity })),
        total: totalPrice (),
        date: today.toDateString(),
    };

    const handleClick = () => {
        const db = getFirestore ();
        const orderCollection = collection (db, "orders");
        addDoc (orderCollection, order)
            .then ((snapshot) => setUn (snapshot.id));
    };


    return (
        <>
        <div>
            {<p>{cliente.name}, tu número de usuario es: {id}</p>}
            <Link to = "/brief"><button onClick={handleClick}>Confirmar La Compra Para Terminar</button></Link>
        </div>
        </>
    )
};



export default CheckOut;