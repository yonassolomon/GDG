import React from "react";
import { Link } from "react-router-dom";

const Homee=()=>{

    return(
        <div>Home page: <hr></hr>
            <Link to='/aabout-us'>About us</Link><br></br>
            <Link to='/contact-us/232'>Content</Link>
        </div>
    )
}
export default Homee
