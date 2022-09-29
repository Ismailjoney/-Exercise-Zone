const addToDb = id => {
    console.log(id)
    // let shoppingCart = {};
  
    //get the shopping cart form local storage
    // const storedCart = localStorage.getItem(`shopping-cart`);
    // if(storedCart){
    //    shoppingCart =  JSON.parse(storedCart);
    // }
    const setDb = localStorage.setItem(`time`,id )
    const getDb = localStorage.getItem(`time`);
        
    //  return getDb;
    //add qauantity 
    // let quantity = shoppingCart[id];
    // if(quantity){
    //    let newQuantity = quantity + 1;
    //    shoppingCart[id] = newQuantity; 
    // }else{
    //     shoppingCart[id] = 1;
    // }

    //set 
    // localStorage.setItem(`shopping-cart`, JSON.stringify(shoppingCart));
}




 
export {
    addToDb, 
    
    // removeFromDb,
    // deleteShoppingCart
}