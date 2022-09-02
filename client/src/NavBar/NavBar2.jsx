import React from "react";
import { Link } from "react-router-dom";
import style from './NavBar2.module.css';


export default function NavBar2(){
    return(
        <div>
            <div>
                <div className={style.container}>
                    <Link to='/' style={{ textDecoration: "none" }}>
                    <p className={style.p}>Bob's Burgers app</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}