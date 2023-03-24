import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import {UserContext} from "../../context/UserContext";




const formBase = {
  name: '',
  email: '',
  phone: '',
  address: '',
};


  const ContactForm = () => {
  const [form, setForm] = useState(formBase);
  const {id, setId} = useContext (UserContext);


  const submitHandler = (ev) => {
    ev.preventDefault();

    const db = getFirestore();
    const contactFormCollection = collection(db, 'contactform');

    addDoc(contactFormCollection, form).then((snapshot) => {
      setForm(formBase);
      setId(snapshot.id);
    });
  };

  const inputChangeHandler = (ev) => {
    const { name, value } = ev.target;

    setForm({ ...form, [name]: value });
  };

  return (    
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            name="name"
            id="name"
            value={form.name}
            onChange={inputChangeHandler} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={inputChangeHandler} />
        </div>
        <div>
          <label htmlFor="phone">Telefono</label>
          <input
            name="phone"
            id="phone"
            value={form.phone}
            onChange={inputChangeHandler}
          ></input>
        </div>
        <div>
          <label htmlFor="name">Direccion</label>
          <input
            name="address"
            id="address"
            value={form.address}
            onChange={inputChangeHandler} />
        </div>
        {typeof id !== 'undefined' ? (<Link to = "/checkout">Terminar La Compra</Link>) : (<button>Enviar</button>)}        
      </form>
    </div>
  );
};

export default ContactForm;
