


const initialState = {
    characters: [],
    charactersCopy: [],
    detail: []
}


export default function reducer(state = initialState, action){
    switch(action.type){
        case "GET_ALL_CHARACTERS":
            return{
                ...state,
                characters: action.payload,
                charactersCopy: action.payload
            }
            case "SEARCH_CHARACTER":
                let nombres =
                action.payload === ""
                ? state.charactersCopy
                : state.charactersCopy.filter((e) =>
                e.name.toLowerCase().includes(action.payload.toLowerCase())
                );
            return {
            ...state,
            characters: nombres
            }

            case "CHARACTER_DETAIL":
                return{
                    ...state,
                    detail: action.payload
                    
                }

            case "RESET_CHARACTER":
                const reset = []
                  return{
                    ...state,
                    detail: reset
                  }
        
            default:
                return {...state}
            }
        }