import React from "react";
import uniqid from 'uniqid'
import List from './List'
import { LIST_TYPES, LIST_COPY} from './config'
const Board = ({tasks, setTasks})=>{
    const addNewTask = (title, description)=>{
        const newTask = {
            id: uniqid(),
            title: title,
            description: description,
            created: new Date().toISOString(),
            status: LIST_TYPES.BACKLOG
        }
        setTasks([...tasks, newTask])
    }
    return(
        <>
        {Object.values(LIST_TYPES).map(type=> {
            const listTasks = tasks.filter(task=>task.status === type)
            return(
                <List key={type} type={type} title={LIST_COPY[type]} tasks={listTasks} addNewTask={addNewTask}/>
            )
        })}
        </>
    )
}
export default Board