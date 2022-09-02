import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import style from './footer.module.css';

export default function Footer(){
    return(
        <div>
            <div>
                <div className={style.contenedor}>
                    <span className={style.span}>Developed by Solana Romero
                        <br />
                    Copyright © 2022
                    </span>
                        <ul>
                            <div className={style.contLi}>
                            <li className={style.li}>
                                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/solana-romero/" className={style.a}>
                                    <FontAwesomeIcon icon={faLinkedin} color= '#171219' />
                                </a>
                            </li>
                            <li className={style.li}>
                                <a target="_blank" rel='noreferrer' href="https://github.com/solanamr" className={style.a}>
                                    <FontAwesomeIcon icon={faGithub} color= '#171219' />
                                </a>
                            </li>
                            </div>
                        </ul>
                </div>
            </div>
        </div>
    )
}