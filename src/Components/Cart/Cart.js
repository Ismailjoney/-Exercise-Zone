import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {addToCart} = props;
 
    let totalTime = 0;
    for(const product of addToCart){
        totalTime = totalTime + product.time
    }
    return (
        <div>
           <div className='cart'>
            <p>Excuse Time :{totalTime} </p>
            <p>Break time :</p>
            </div> 
        </div>
    );
};

export default Cart;