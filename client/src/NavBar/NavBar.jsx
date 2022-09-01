import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import style from './navBar.module.css';


export default function NavBar({setCurrentPage}){
    return(
        <div>
            <div>
                <div className={style.container}>
                    <Link to='/' style={{ textDecoration: "none" }}>
                    <p className={style.p}>Bob's Burgers app</p>
                    </Link>
                    <SearchBar setCurrentPage={setCurrentPage}/>
                </div>
            </div>
        </div>
    )
}