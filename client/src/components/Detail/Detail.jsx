import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { detailCharacter, reset } from '../../redux/actions'
import { useEffect } from 'react';

export default function Detail(){
    
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() =>{
        dispatch(reset())
        dispatch(detailCharacter(id))
    },[dispatch, (id)])

   const characterDetails = useSelector(state => state.detail)
   console.log(characterDetails, 'selector')


    return(
        <div>
            <div>
            <Link to = '/'>
                    <button>Back</button>
                </Link>
            </div>

            <div>
                {
                    characterDetails ?
                        <div>
                            <img src={characterDetails.image} alt="" />
                            <h1>{characterDetails.name}</h1>
                            <h3>{characterDetails.occupation}</h3>
                        </div>
                        : 
                        <p>loading</p>
                }
            </div>
                 
        </div>
    )
}


// if (Object.keys(pokeDetail).length === 0) {
//     console.log(pokeDetail.types);

//     return (
//       <div
// 
//        
//       >
//         <Loader />
//       </div>
//     );
//   } else {
//     return (
//       
//         <div>
//           <Link to="/home">
//             <button className="botonDetails" onClick={resState}>
//               Home
//             </button>
//           </Link>
//         </div>
//         <div>
//           <img
//             className="imagdetalle"
//             src={pokeDetail.img || imagenPoke}
//             alt={pokeDetail.name}
//             width="450px"
//             height="450px"
//           />
//         </div>

//         <div className="cardDetalle">
//           <div>
//             <h1>{pokeDetail.name.toUpperCase()}</h1>
//           </div>
//           <div className="base3">
//             <h1>
//               Types:{" "}
//               {pokeDetail.types.map((e) => {
//                 return (
//                   <p key={e}>{e.charAt(0).toUpperCase() + e.slice(1) + " "}</p>
//                 );
//               })}
//             </h1>
//           </div>
//           <div className="base3">
//             <h2>HP: {pokeDetail.hp}</h2>
//           </div>
//           <div className="base3">
//             <h2>Speed: {pokeDetail.speed}</h2>
//           </div>
//           <div className="base3">
//             <h2>Height: {pokeDetail.height}</h2>
//           </div>
//           <div className="base3">
//             <h2>Weight: {pokeDetail.weight} </h2>
//           </div>
//           <div className="base3">
//             <h2>Defense: {pokeDetail.defense}</h2>
//           </div>
//         </div>
//       </div>
//     );
//   }