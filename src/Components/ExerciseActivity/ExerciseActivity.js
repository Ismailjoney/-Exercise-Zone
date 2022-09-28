import React from 'react';
import './ExerciseActivity.css'

const ExerciseActivity = (props) => {
    console.log(props);
    const {name,seller,price,img,time} =props.product;
    return (
        <div className='details'>
            <div className='exercise-details'>
                <img src={img} alt="" />
                <p>name:{name}</p>
                <p>seller:{seller}</p>
                <p>Time :{price}</p>
                <p>Time :{time} s</p>
                
            </div>
            <button onClick={props.handler} className='addedCart'>
                Added cart
            </button>
        </div>
    );
};

export default ExerciseActivity;