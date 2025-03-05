import React from "react";
import { Link } from "react-router-dom";

const Homee=()=>{

    return(
        <div>Home page: <hr></hr>
            <Link to='/aabout-uss'>About us</Link><br></br>
            <Link to='/contact-us'>Content</Link>
        </div>
    )
}
export default Homee
