import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { reset, detailCharacter } from '../../redux/actions'
import { useEffect } from 'react';

export default function Detail(){
    
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() =>{
        dispatch(detailCharacter(id))
        dispatch(reset())
    },[dispatch, (id)])

    const detailsCharacter = useSelector((state)=> state.detail)
    console.log(detailsCharacter, 'detail')


    return(
        <div>
            <div>
            <Link to = '/'>
                    <button>Back</button>
                </Link>
            </div>

            <div>
                {
                    detailsCharacter.length > 0 ?
                        <div>
                            <h1>{detailsCharacter[0].name}</h1>
                            <img src={detailsCharacter[0].image} alt="" />
                            <h3>{detailsCharacter[0].occupation}</h3>
                        </div>
                        : 
                        null
                }
            </div>
                 
        </div>
    )
}


// if (Object.keys(pokeDetail).length === 0) {
//     console.log(pokeDetail.types);

//     return (
//       <div
//         style={{
//           width: "100vw",
//           height: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           marginTop: "-10rem",
//           marginLeft: "3rem",
//         }}
//       >
//         <Loader />
//       </div>
//     );
//   } else {
//     return (
//       <div className="paginado2">
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