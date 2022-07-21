import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import PersonMenu from './PersonMenu'
const Person = ()=>{
    const [statePerson, setStatePerson] = useState(false)
    const changeStatePerson = ()=>{
        setStatePerson(!statePerson)
    }
    return(
        <>
        <div className="personMain">
        <div className="personBlock" onClick={changeStatePerson}>
        <div className="personRound">
        <FontAwesomeIcon className="personIcon" icon={faUser}/>
        </div>
        <div className="personArrow">
            {statePerson ? <FontAwesomeIcon icon={faAngleUp}/> : <FontAwesomeIcon icon={faAngleDown}/>}
        </div>
        </div>
        <div className="personMenu">
        { statePerson &&
        <PersonMenu/>
        }   
        </div>
        </div>
        
        </>
    )
}
export default Person