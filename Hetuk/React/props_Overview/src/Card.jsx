import React from "react";

export const Card = ({
    name ="Not Provided",
    age = "Not Given",
    email = "Not Specified",
}) => {
    
    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                border: "1px solid red",
                height: "200px",
                maxWidth: "400px",
                padding: "20px",
                textAlign:"center",
            }}>
                <h2>Name: {name}</h2>
                <h2>Age: {age}</h2>
                <h2>Email: { email}</h2>
        </div>
        </>
    )
}