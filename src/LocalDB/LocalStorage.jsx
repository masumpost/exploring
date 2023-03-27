const addToDb = (id) => {
    let shoppingCart;
    let storedCart = localStorage.getItem('Cart-Items');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    else{
        shoppingCart = {};
    }

    let  quantity = shoppingCart[id];
    if(quantity){
        let newQuantity= quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{

        shoppingCart[id] = 1;
    }
    localStorage.setItem('Cart-Items', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
   const storedCart = localStorage.getItem('Cart-Items');
      if(storedCart){
       const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart)
            delete shoppingCart[id];
                localStorage.setItem('Cart-Items', JSON.stringify(shoppingCart));
   }
}


export{addToDb, removeFromDb}