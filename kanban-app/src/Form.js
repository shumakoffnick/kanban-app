import React, { useState } from "react";
import { LIST_COLORS } from "./config";
    
    const Form = ({type, addNewTask, setIsFormVisible})=>{
        const [values, setValues] = useState({
            title: "",
            description: ""
        })
        const handleChange = (e)=>{
            const fieldName = e.target.name
            setValues({...values, [fieldName]: e.target.value})
        }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(values.title){
            addNewTask(values.title, values.description)
        }
        setIsFormVisible(false)
    }
    return(
        <>
        <form onSubmit={handleSubmit} className="form">
        <div>
        <input 
        placeholder="Enter task title"
        id="taskTitle"
        name="title"
        type="text"
        value={values.title}
        onChange={handleChange}
        ></input>
        </div>
        <div className="formDescription">
            <input 
            id="taskDescription"
            name="description"
            placeholder="Enter task description"
            value={values.description}
            onChange={handleChange}
            ></input>
        </div>
        <button style={{backgroundColor: LIST_COLORS[type]}} className="formButton">Add</button>
        </form>
        </>
    )
}
export default Form