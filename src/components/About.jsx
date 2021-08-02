import React from 'react'
import styles from './About.module.css';
import { RiGithubFill } from 'react-icons/ri';
import { RiAtLine } from "react-icons/ri";


export default function About() {
    return (
        <div>
            <div className={styles.espacioSup}></div>
            <div  className={styles.cont}>
                <div className={styles.tarjetaAbout}>
                    <h2>ClimApp</h2>
                    <p>Proyecto personal de Francisco Palacios </p>
                    <p>para el curso de Henry</p>
                    <p>Temas aplicados:</p>
                    <p>React</p>
                    <p>CSS module, animaciones CSS  Ajax</p>
                    <p>ES6, Fetch, Rutas</p>
                    <p>Uso de dos Api (temperatura e imageness)</p>
                    <a href="https://github.com/Franzcod"> <RiGithubFill /> </a>
                    <a href="mailto:palacios.franciscoqoutlook.com"> <RiAtLine /> </a>
                </div>
            </div>
        </div>
    )
}
