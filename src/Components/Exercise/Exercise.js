import React, { useEffect, useState } from 'react';
import ExerciseActivity from '../ExerciseActivity/ExerciseActivity';
import './Exercise.css'

const Exercise = () => {
    const [products, setProducts] = useState([]);
    const [addToCart, setAddToCart] =useState([]);
    useEffect(()=>{
        fetch(`fakeDb.json`)
        .then(res => res.json())
        .then(data =>  setProducts(data))
    },[])

    const handler = (id) => {
        console.log(`click`,id)
    }

    return (
        <div>
            <h1>Navation bar</h1>
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
                    <h1>cart</h1>
                </div>
            </div>
        </div>
    );
};

export default Exercise;