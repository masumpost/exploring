import React, { useEffect, useState } from 'react';
import User from '../User/User';
import'./Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);
    let handelShowAll = () => {
        setShowAll(true);
    }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
             <h3>Here is the {products.length} Number of people</h3>
             <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)"}}>
           
            {
                products.slice(0, showAll ? 10 : 6).map(product=> <User product={product}></User>)
            }
             </div>
             {
               !showAll && <button onClick={handelShowAll} className="btn btn-active btn-secondary">Show All</button>
             }
        </div>
        
    );
};

export default Products;