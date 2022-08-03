import React from "react";


export default function Published(props){
    return(
        <div>
            <p>{props.text}</p>
            <h1>{props.date}</h1>
        </div>
    )
}