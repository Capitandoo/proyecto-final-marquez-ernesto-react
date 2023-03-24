import React from 'react'
//import {addDoc, collection, getFirestore} from "firebase/firestore";
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';



const Cart = () => {
    const {cart, totalPrice} = useCartContext ();

    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to = "/">Hacer una compra</Link>
            </>
        );
    };

    return (
        <div>
            {cart.map (product => <ItemCart key={product.id} product = {product} />)}
            <p>Total: ${totalPrice ()}</p>
            <Link to = "/registro">Registrate para Terminar la Compra</Link>
        </div>
    )
}

export default Cart