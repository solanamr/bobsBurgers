import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import {getAllCharacters} from '../../redux/actions'
import Characters from "../Characters/Characters";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";

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
            <SearchBar setCurrentPage={setCurrentPage}/>

             <Pagination currentPage={currentPage} setCurrentPage ={setCurrentPage} 
             characterPerPage = {characterPerPage} paginado = {paginado}/>
            <div>
                {
                    currentCharacter.length > 0 ? currentCharacter.map(c =>{
                        return(
                            <div>
                                <Link to= {`/characters/${c.id}`}>
                                <Characters name = {c.name} image = {c.image}/>
                                </Link>
                            </div>
                        )
                    })
                    :
                    <div>
                        <h1>Loading...</h1>
                    </div>
                }
            </div>
        </div>
    )
}