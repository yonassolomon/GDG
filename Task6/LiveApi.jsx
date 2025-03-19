import React,{useCallback, useEffect, useReducer, useState,useMemo} from 'react';


const LiveApi=()=>{
    const[query,setQuery]=useState('');
    const[user,setUser]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setUser(data));
    },[]);


    console.log(user);

    const filteredusers=useMemo(
        ()=>user.filter((user)=>user.name.toLowerCase().includes(query.toLowerCase())),
        [query,user]
    );
    const handleSearch=useCallback((e)=>{
        setQuery(e.target.value);
    },[]);

    return(
        <div>
            <h2>Live Search</h2>
            <input type="text" value={query} onChange={handleSearch} placeholder='Search users..'></input>
            <ul>
                {filteredusers.map((user)=>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
export default LiveApi;
