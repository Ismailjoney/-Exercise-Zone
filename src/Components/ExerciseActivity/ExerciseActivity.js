import React from 'react';
import './ExerciseActivity.css'

const ExerciseActivity = (props) => {
    // console.log(props);
    const {name,description, age,img,time} =props.product;

    return (
        <div className='details'>
            <div className='exercise-details'>
                <img src={img} alt="" />
                <h4>Name:{name}</h4>
                <p> Description: {description ? description.slice(0,90) : `not found`}</p>
                <p>Age :{age}</p>
                <p>Time :{time} s</p>  
            </div>
            <button onClick={() => props.handler(props.product)} className='addedCart'>
                Added cart
            </button>
        </div>
    );
};

export default ExerciseActivity;