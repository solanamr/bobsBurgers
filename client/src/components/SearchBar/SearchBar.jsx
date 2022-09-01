import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchCharacterByName } from '../../redux/actions';
import style from './searchBar.module.css';

export default function SearchBar({setCurrentPage}){

    const dispatch = useDispatch()

    const [name, setName] = useState("");

    useEffect(() => {
      dispatch(searchCharacterByName());
    }, [dispatch]);
  
    function handleInputChange(e) {
      dispatch(searchCharacterByName(e));
      setCurrentPage(1);
    }
  
    return (
      <div>
        <div>
          <input onChange={(e) => {setName(e.target.value); handleInputChange(e.target.value);}} type="text" 
          placeholder="Search character" value={name} className={style.input}/>
        </div>
      </div>
    );
  }