import React from "react";
import { useParams } from "react-router-dom";
const Contact=()=>{

    const {id} =useParams();
    const data ={
            name:"yon",
            id:"232"
        }
    return(
        <div>
            {data.id === id ? <div>{data.name}</div>: <div>error</div>}
            +251910888614
        </div>
    )
}
export default Contact
