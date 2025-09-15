import React from "react";

export const TodoList = ({props}) => {
    
    return (
        <>
            <h1>List Todo</h1>
            {
                props.map((el,i)=>(
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <input type="checkbox" name="checkbox" id="checkbox" style={{cursor:"pointer"}}/>
                        <p>{el.text}</p>
                        <button style={{width:"70px", borderRadius:"3px", border:"1px solid"}}>Edit</button>
                        <button style={{width:"70px", borderRadius:"3px", border:"1px solid"}}>Delete</button>
            </div>
                ))
            }
        </>
    )
}