import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ExerciseActivity from '../ExerciseActivity/ExerciseActivity';
import './Exercise.css';

const Exercise = () => {
    const [products, setProducts] = useState([]);
    const [addToCart, setAddToCart] =useState([]);
   

    useEffect(()=>{
        fetch(`fakeDb.json`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handler = (product) => {
        //console.log(product);
        const newAddedCart = [...addToCart,product];
        // console.log(newAddedCart);
        setAddToCart(newAddedCart);
    }

  
    return (
        <div className='container'>
            <h1>
               
                Exercise Zone
            </h1>
            <div className="exercise">
                <div className="exerciseProduct">
                    {
                        products.map(product => <ExerciseActivity product= {product} 
                        key ={product.id}
                        handler = {handler}
                        ></ExerciseActivity>)
                    }
                    
                </div>
                <div className="exerciseCart">       
                    <Cart addToCart={addToCart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Exercise;