import { useContext } from "react"

export const Counter = () => {
    const { count, setCount } = useContext(CreateContexts);

    return (
        <>
            <h1>Count {count}</h1>
            <button onClick={()=>setCount((prev)=>prev+1)}>+</button>
            <button onClick={()=>setCount((prev)=>prev+1)}>-</button>
        </>
    )
}