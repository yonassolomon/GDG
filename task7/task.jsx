/*import React,{useState} from 'react';
import { Form } from 'react-router-dom';
const Taskk=()=>{
    const[takeInput,setInput]=useState("");
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`your form submited successfully ! your submit=${takeInput}`);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                name:
                <input type="text" 
                value={takeInput}
                onChange={
                    (e)=>{
                        setInput(e.target.value)
                    }
                }
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Taskk
*/

import React,{useState} from 'react';
const Taskk=()=>{
    const[name,setName]=useState("");
    const[dep,setDep]=useState("");
    const[course,setCourse]=useState([]);
    const handleEvent=(e)=>{
        e.preventDefault();
        document.writeln(`registered successfully ${name}`);
        document.writeln(`dep ${dep}`)
        document.writeln(`courses ${course}`)
    }
    return(
        <div>
            <form onSubmit={handleEvent}>
               Name: <input
                type='text'
                value={name}
                onChange={(ev)=>{
                    setName(ev.target.value)
                }}
                >
                    
                </input>
                department: <input
                type='text'
                value={dep}
                onChange={(ev)=>{
                    setDep(ev.target.value)
                }}
                >
                </input>
                course: <input
                type='text'
                value={course}
                onChange={(ev)=>{
                    setCourse(ev.target.value)
                }}
                >
                </input>
                <ul>
                    {course.map((course,index)=>{
                        <li key={index}>{c}</li>
                    })}
                </ul>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Taskk

/*
import React, { useState } from "react";

const Taskk = () => {
    const [name, setName] = useState("");
    const [dep, setDep] = useState("");
    const [course, setCourse] = useState([]); // ✅ Store courses as an array
    const [newCourse, setNewCourse] = useState(""); // For input handling

    const handleEvent = (e) => {
        e.preventDefault();
        console.log(`Registered successfully: ${name}`);
        console.log(`Department: ${dep}`);
        console.log(`Courses: ${course.join(", ")}`);
    };

    const handleAddCourse = () => {
        if (newCourse.trim() !== "") {
            setCourse([...course, newCourse]); // ✅ Append to the array
            setNewCourse(""); // ✅ Clear input after adding
        }
    };

    return (
        <div>
            <form onSubmit={handleEvent}>
                <label>
                    Name: 
                    <input
                        type="text"
                        value={name}
                        onChange={(ev) => setName(ev.target.value)}
                    />
                </label>
                <br />
                
                <label>
                    Department: 
                    <input
                        type="text"
                        value={dep}
                        onChange={(ev) => setDep(ev.target.value)}
                    />
                </label>
                <br />

                <label>
                    Course: 
                    <input
                        type="text"
                        value={newCourse}
                        onChange={(ev) => setNewCourse(ev.target.value)}
                    />
                    <button type="button" onClick={handleAddCourse}>Add Course</button>
                </label>

                <ul>
                    {course.map((c, index) => (
                        <li key={index}>{c}</li> // ✅ Display added courses
                    ))}
                </ul>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Taskk;
*/
