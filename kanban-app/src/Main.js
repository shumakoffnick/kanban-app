import React from "react";
import Board from "./Board";
import { Switch, Route } from 'react-router-dom'
import TaskDetails from "./TaskDetails";
const Main = ({tasks, setTasks})=>{
    return(
        <>
        <div className="main">
            <Switch>
                <Route exact path={'/'}>
                <Board tasks={tasks} setTasks={setTasks}/>
                </Route>
                <Route path={'/tasks/:taskId'}>
                <TaskDetails tasks={tasks} setTasks={setTasks}/>
                </Route>
            </Switch>            
        </div>
        </>
    )
}
export default Main