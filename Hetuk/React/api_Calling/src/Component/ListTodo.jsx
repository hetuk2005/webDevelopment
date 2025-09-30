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
    console.log("Api Data: ", apiData);
    
    let api = `https://api-database-1.onrender.com/ToDo`

    useEffect(() => {
        setApiData(getData(api))
    }, []);

    return (
        <>
            <h1>List Todo</h1>
        </>
    )
}