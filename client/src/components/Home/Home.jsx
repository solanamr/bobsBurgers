import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import {getAllCharacters} from '../../redux/actions'
import Characters from "../Characters/Characters";
import Pagination from "../Pagination/Pagination";
import NavBar from "../../NavBar/NavBar";
import style from './homeStyles.module.css'
import Footer from "../Footer/Footer";

export default function Home(){

    const dispatch = useDispatch()  
    const allCharacters = useSelector((state) => {return state.characters})
    const [currentPage, setCurrentPage] = useState(1)
    const [characterPerPage, setCharacterPerPage] = useState(10)
    const indexLastPage = currentPage * characterPerPage
    const indexFirstPage = indexLastPage - characterPerPage
    const currentCharacter = allCharacters.slice(indexFirstPage, indexLastPage)
    const paginado = (nroPagina) =>{
        setCurrentPage(nroPagina)
    }



    useEffect(() =>{    
        dispatch(getAllCharacters())
    }, [dispatch])

    return(
        <div>
            <div className={style.contenedor}>
            <NavBar/>

             <Pagination currentPage={currentPage} setCurrentPage ={setCurrentPage} 
             characterPerPage = {characterPerPage} paginado = {paginado}/>

            <div>
                <div className={style.characters}>
                {
                    currentCharacter.length > 0 ? currentCharacter.map(c =>{
                        return(
                            <div className={style.character}>
                                <Link to= {`/characters/${c.id}`} style={{ textDecoration: "none" }}>
                                <Characters name = {c.name} image = {c.image} occupation = {c.occupation}/>
                                </Link>
                            </div>
                        )
                    })
                    :
                    <div className="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                }
                </div>
             </div>

             <Pagination currentPage={currentPage} setCurrentPage ={setCurrentPage} 
             characterPerPage = {characterPerPage} paginado = {paginado}/>

             <Footer/>
            </div>
        </div>
    )
}