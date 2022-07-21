import React from "react";
import Person from "./Person";
const Header = ()=>{

    return(
        <>
        <div className="header">
        <div className="headerTitle">
        Awesome Kanban Board
        </div>
        <div className="headerPerson">
            <Person/>
        </div>
        </div>
        </>
    )
}
export default Header