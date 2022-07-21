import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
const App = ()=>{
    const initialState = JSON.parse(window.localStorage.getItem("tasks")) || []
    const [tasks, setTasks] = useState(initialState)
    useEffect(()=>{
        window.localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])
    return(
        <>
        <BrowserRouter>
        <div className="appBlock">
        <Header/>
        <Main tasks={tasks} setTasks={setTasks}/>
        <Footer tasks={tasks}/>
        </div>
        </BrowserRouter>
        </>
    )
}
export default App