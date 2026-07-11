import {useState} from 'react';

function IcrementDecrement() {

    const [count, setCount] = useState(0);

    function handleIncrement() {
        if(count<10){
            setCount(count + 1);
        }
    }

    function handleDecrement() {

        if(count > 0){
            setCount(count - 1);
        }
        
    }

    return(
        <div>
            <h1>Count: {count}</h1>
            <button 
                onClick={handleIncrement}  
                disabled = {count==10}
                >Increment</button>
            <button
                onClick={handleDecrement} 
                disabled = {count==0}
            >Decrement</button>
        </div>
    )
}

export default IcrementDecrement;

