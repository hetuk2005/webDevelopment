import { nanoid } from "nanoid";
import axios  from "axios";
import { useRef } from "react"

export const Todos = () => {
    let api = `https://api-database-1.onrender.com/ToDo`
    
    const dataRef = useRef(null);

    const handleClick = async () => {
        const values = dataRef.current.value;

        let objectData = {
            id: nanoid(),
            todo: values,
            isEdit: false,
            isCompleted: false
        }

        try {
            let res = await axios.post(api, objectData)
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <h1>Todo</h1>
            <input type="text" placeholder="Add Todo..." ref={dataRef} />
            <input type="button" value="Add Todo" onClick={handleClick} />
        </>
    )
};