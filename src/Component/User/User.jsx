import React from 'react';
import { addToDb, removeFromDb } from '../../LocalDB/LocalStorage';
import'./User.css'

const User = (props) => {
    console.log(props)
    let {name, email,phone, id} = props.product
    const addToCart = (id) => {
       addToDb(id)
    }
    const remove = id => {
       removeFromDb(id)
    }
    return (
        <div className='card'>
            <h4>Name: {name}</h4>
            <h5>Email: {email}</h5>
            <h5>Phone: {phone} </h5>
            <h6>ID: {id}</h6>
            <div className='grid grid-cols-2 gap-2'>
            <button onClick={()=>addToCart(id)} className="btn btn-accent px-0">Add to Cart</button>
            <button onClick={()=>remove(id)} className="btn btn-secondary p-0">Remove</button>
            </div>
        </div>
    );
};

export default User;