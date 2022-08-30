import React from "react";

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
           <button  onClick={handlePrev}>Previous</button>
           <button onClick={handleNext}>Next</button>
        </div>
    )
}