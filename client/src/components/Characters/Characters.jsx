import React from "react";

export default function Characters({id, name, image}){
    return(
        <div>
            <div key = {id}></div>
            <h2>{name}</h2>
            <img src={image} alt="imagen" />
        </div>
    )
}