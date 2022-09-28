import React, { useState } from 'react';
import './Cart.css';

const Cart = (props) => {
    // const [add, setAdded] = useState(``);
    const {addToCart} = props;
 
    let totalTime = 0;
    for(const product of addToCart){
        totalTime = totalTime + product.time
    }

    // const added = () => {
    //     const addBTn = add;
    //     console.log(addBtn)
         
    //   }
    return (
        <div className='cart'>
            <h3>Mohammad Ismail Joney</h3>
                    <div person-info>
                        <div>
                            <h3>Weight : 75kg</h3>
                        </div>
                        <div>
                            <h3>height : 5.9</h3>
                        </div>
                        <div>
                            <h3>Age: 25</h3>
                        </div>
                        <button>10s</button>
                        <button>20s</button>
                        <button>23s</button>
                        <button>13s</button>
                        <button>34s</button>
                    </div>
                        
          

            <p>Excuse Time :{totalTime} </p>
            <p>Break time :</p>
             
        </div>
    );
};

export default Cart;