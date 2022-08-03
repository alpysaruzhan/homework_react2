import React from "react";


export default function Author(props){
    return(
        <div>
            <img src={props.img} alt="" />
            <h1>Name: {props.name}</h1>
        </div>
    )
}