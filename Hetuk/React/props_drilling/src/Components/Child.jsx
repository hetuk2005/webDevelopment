import React from "react";

export const Child=(props)=>{
    return (
        <>
            <h1>Child{props.counts.count}</h1>
            <button onClick={props.counts.handleInc}>+</button>
            <button onClick={props.counts.handleDec}>-</button>
        </>
 )
}