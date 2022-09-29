import React, { useState } from 'react';
import './Cart.css';

const Cart = (props) => {
    const [addTime,setAddTime] = useState(0);
    const {addToCart} = props;
 
    let totalTime = 0;
    for(const product of addToCart){
        totalTime = totalTime + product.time
    }

   const handle = (props) => {
    setAddTime(props);  
   }
    return (
        <div className='cart'>
            <h3>Mohammad Ismail Joney</h3>
                    
                <h3>Weight : 75kg</h3>
                <h3>height : 5.8 </h3>
                <h3>Age: 25</h3>
                  <br />
                  <h4>Add a  break</h4>   
                <button onClick={() =>handle(`10s`)}>10s</button>
                <button onClick={() => handle(`20s`)}>20s</button>
                <button onClick={() => handle(`23s`)}>23s</button>
                <button onClick={() => handle(`13s`)}>13s</button>
            <h4>Exercise Details</h4>
            <h5>Excuse Time :{totalTime} </h5>
            <h5>Break time :{addTime}</h5>

            <button>Activity Completed</button> 
        </div>
    );
};

export default Cart;