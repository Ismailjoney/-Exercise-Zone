import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='questionContain'>
            <h2>Question And Answer</h2>
            <div className='question'>
            <div>
                <h4>1. How does react work ?</h4>
                <p>
                    it’s important to note that ReactJS is not a JavaScript framework. That’s because it’s only responsible for rendering the components of an application’s view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.
                </p>
            </div>
                
            <div>
                <h4>What is the different between state and props ?</h4>
                <p>
                Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components
                </p>
            </div>
            <div>
                <h4>where use to useEffect ?</h4>
                <p>
                The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects. Since the render method is to quick to produce a side-effect one needs to use life cycle methods to observe the side effects. For example, consider updating the document title for a simple counter component to the current value.  
                </p>
                
            </div>
 
              
            </div>
        </div>
    );
};

export default Question;