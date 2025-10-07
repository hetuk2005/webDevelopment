import axios from "axios";
import React, { useEffect, useState } from "react";

const getData = async (url) => {
    try {
        let res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const ListTodo = () => {
    const [apiData, setApiData] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState(false);
    console.log("Api Data: ", apiData);
    
    let api = `https://api-database-1.onrender.com/ToDo`

    const handleEdit = async (id) => {

        try {
            let updateEdit = {
            isEdit: true
            }
            let res = await axios.patch(`${api}/${id}`, updateEdit);
            console.log("Res: ", res);
        } catch (error) {
            console.log(error);
        }
    }
    const handleDel = async (id) => {
        await axios.delete(`${api}/${id}`)
    }

        useEffect(() => {
            const fetchData = async () => {
                try {
                    let res1 = await getData(api);
                    setApiData(res1);
                } catch (error) {
                    console.log(error);
                setisError(true)
                }
                finally {
                    setisLoading(false)
                }
            }
            fetchData();
        }, []);
    
if(isLoading) return <h1>Loading...</h1>
if(isError) return <h1>404 Error</h1>

    return (
        <>
            <h1>List Todo</h1>
            <h1>Hello Everyone</h1>
            {
                apiData?.map((el)=>(
                    <div className="todoList" key={el.id}>
                        <input type="checkbox" />
                        <h1>{el.todo}</h1>
                        <button onClick={()=>handleEdit(el.id)} className="btn-edit">Edit</button>
                        <button onClick={()=>handleDel(el.id)} className="btn-del">Delete</button>
                    </div>
                ))
            }
        </>
    )
    }