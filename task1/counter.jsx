import { useState } from "react";
import './style.css';
function Counter(){
    
    const [count,setCount]=useState(0);
    return(
        <div>
            <p className="count">{count}</p>
            <button className="b1"  onClick={()=>{
                setCount(count+1)
            }}>INCREMENT</button>
            <button className="b2" onClick={()=>{
                setCount(count-1)
                {if(count<=0){
                    setCount(0)
                }} 
            }}>DECREMENT</button>
            <button onClick={()=>{
                setCount(0)
            }}>Reset</button>
        </div>
    );
}
export default Counter 
