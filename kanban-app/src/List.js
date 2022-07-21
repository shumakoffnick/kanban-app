import React, { useState } from "react";
import { Link } from "react-router-dom";
import {LIST_COLORS, LIST_TYPES} from './config'
import Form from "./Form";
const List = ({type, title, tasks, addNewTask})=>{
     const [isFormVisible, setIsFormVisible] = useState(false)
     function changeIsForm(){
        setIsFormVisible(!isFormVisible)
     }
    return(
        <><div className="listMain">
        <div className="list">
        <h2 className="listTitle">{title}</h2>
        {tasks.map(m=>{
            return(
                <Link to={`/tasks/${m.id}`} className="taskLink">
                <div key={m.id} style={{backgroundColor: LIST_COLORS[type]}} className="task">{m.title}</div>
                </Link>
            )
        })}
        {type === LIST_TYPES.BACKLOG && (
            <button onClick={changeIsForm} className="addButton">+ Add new card</button>
        )}
        {type === LIST_TYPES.BACKLOG && isFormVisible && (
            <Form type={type} addNewTask={addNewTask} setIsFormVisible={setIsFormVisible}/>
        )}
        </div>
        </div>
        </>
    )
}
export default List