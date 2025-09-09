import React, { useEffect, useState } from "react";

export const Child = ({props}) => {
    
    const [ans, setAns] = useState(0);
    let operator = props.operators;

    useEffect(() => {
 switch (operator) {
     case "+":
         setAns(+props.number1 + +props.number2)
            break;
        case "-":
         setAns(+props.number1 - +props.number2)
            break;
        case "*":
         setAns(+props.number1 * +props.number2)
            break;
        case "/":
         setAns(+props.number1 / +props.number2)
            break;
        case "%":
         setAns(+props.number1 % +props.number2)
            break;
        default:
            setAns("You Have Given Wrong Operator");
            break;
    }       
    }, [props.number1,props.number2,operator])
    
    return (
        <>
            <h3>Answer: { ans}</h3>
        </>
    )
}