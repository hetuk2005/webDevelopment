import React from "react";

 const UseRef = () => {
    const refData = React.useRef(null);

    const handleClick = () => {
        let value = refData.current.value;
        console.log("Value: ", value);
    }

    return (
        <>
        <h1>useRef Hook's</h1>
            <input type="text" ref={refData} />
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default UseRef