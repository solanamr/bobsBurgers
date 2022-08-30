import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchCharacterByName } from '../../redux/actions'

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
          <input
            onChange={(e) => {
              setName(e.target.value);
              handleInputChange(e.target.value);
            }}
            type="text"
            placeholder="Search"
            value={name}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
        </div>
      </div>
    );
  }