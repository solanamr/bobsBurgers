import React from "react";
import style from './pagination.module.css';


export default function Pagination({currentPage, setCurrentPage}){

    function handleNext(){
        if(currentPage < 4)
        return setCurrentPage(currentPage + 1)
    }

    function handlePrev(){
        if(currentPage > 0){
            return setCurrentPage(currentPage - 1)
        }
            
    }

    return(
        <div>
            <div className={style.container}>
           <button type="button" class="btn btn-primary" className={style.btnPrev} disabled = {currentPage === 1}  onClick={handlePrev}>Previous</button>
           <button type="button" class="btn btn-primary" className={style.btnNext} onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}