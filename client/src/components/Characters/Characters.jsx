import React from "react";
import style from './characters.module.css'

export default function Characters({id, name, image}){
    return(
        <div>
            <div className={style.contenedor}>
            <div key = {id} ></div>
            <img src={image} alt="imagen" className={style.img}/>
            <h2 className={style.h2}>{name}</h2>
            </div>
        </div>
    )
}