import {useState} from "react";

import { TodoList } from "./todo_Lists";

export const AddTodo = () => {
    
    const [data, setData] = useState([]);
    const [text, setText] = useState('');

    const handleFunc = () => {
        
        if (text.trim() === "") return;

        let todo = {
            id: Date.now(),
            text,
            isEdit: false,
            isCheck:false
        }

        setData([...data, todo]);
    }

    return (
        <>
            <h1>Hello World</h1>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", gap:"20px"}}>
                <h1>Todo</h1>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px"}}>
                    <input type="text" placeholder="Enter The Todo Task..." onChange={(e)=>setText(e.target.value)} style={{width:"200px"}}/>
                    <input type="button" value="add todo" onClick={handleFunc} style={{width:"70px", border:"1px solid", borderRadius:"3px"}} />
                </div>
                    <TodoList props={data} />
            </div>
        </>
    )
}