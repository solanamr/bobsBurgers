import axios from "axios";
const url = "http://localhost:3001";



export function getAllCharacters(){
    return async function(dispatch){
        try {
            const all = await axios.get(`${url}/characters`)
            return dispatch({
                type: "GET_ALL_CHARACTERS",
                payload: all.data
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}


export function searchCharacterByName(name){
    return {
        type: "SEARCH_CHARACTER",
        payload: name,
      };
    
}

export function detailCharacter(id){
    return async function(dispatch){
        try {
            const idCharacter = await axios.get(`${url}/characters/${id}`)
            console.log(idCharacter)
            return dispatch({
                type: "GET_CHARACTER_ID",
                payload: idCharacter.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function reset(){
    return{
        type: "RESET_CHARACTER"
    }
}


