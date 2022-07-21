import React from "react";
import { LIST_COPY, LIST_TYPES, LIST_COLORS } from "./config";
import { Link, useRouteMatch } from "react-router-dom";
import { formatDate } from './Utils'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const TaskDetails = ({tasks, setTasks})=>{
    const match = useRouteMatch()
    const {taskId} = match.params
    const task = tasks.find(t=>t.id ===taskId)
    const handleChange = (e)=>{
        const updatedTasks = tasks.map(task=>{
            if(task.id === taskId){
                return {...task, status: e.target.value}
            }
            return task
        })
        setTasks(updatedTasks)
    }
    return(
        
        <>
        <div className="detailsMine">
            <div className="detailsBlock">
            <Link to="/" className="homeLink">
                <FontAwesomeIcon className="xmark" icon={faXmark}/>
            </Link>
            <div className="detailsMineBlock">
            <h2 className="detailsTitle">{task.title}</h2>
            <div className="detailsStatus" style={{background: LIST_COLORS[task.status] }}>{LIST_COPY[task.status]}</div>
            </div>
            <p className="detailsCreated">{formatDate(task.created)}</p>
            <p className="detailsDescription">Description: {task.description || "No description"} </p>
            <p className="detailsChange">Change status:</p>
            <select className="selectStatus" value={task.status} onChange={handleChange}>
                {Object.values(LIST_TYPES).map(type=>{
                    return(
                        <option value={type}>{LIST_COPY[type]}</option>
                    )
                })}
            </select>
            </div>
        </div>
        </>
    )
}
export default TaskDetails