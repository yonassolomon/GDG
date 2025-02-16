import React from "react";
import './style.css';
function UserCard({name,email,age}){
    return(
        <div className="userContainer" >
            <h2>Name:{name}</h2>
            <h2>Email:{email}</h2>
            <h2>Age:{age}</h2>
        </div>
    )
}
export default UserCard
