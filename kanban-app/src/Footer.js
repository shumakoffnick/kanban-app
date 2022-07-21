import React from "react";
import { LIST_TYPES, LIST_COPY } from "./config";
const Footer = ({tasks})=>{
    return(
        <>
        <div className="footer">
            <div className="footerCounts">
                {Object.values(LIST_TYPES).map(m=>{
                    const listCount = tasks.filter(t=> t.status === m)
                    if(!listCount.length) return null
                    return(
                        <div key={m} className="count">{LIST_COPY[m]}: {listCount.length}</div>
                    )
                })}
            </div>
            <div className="footerName">
            Kanban board by Nikolay Shumakov, 2022
            </div>
        </div>
        </>
    )
}
export default Footer