import React from 'react';
import styles from './CardActual.module.css';
// import { Delete } from '@material-ui/icons';
import { Link } from 'react-router-dom';


export default function CardActual(props) {
    console.log("props: "+ props.length)
  // console.log('En Card: '+ props.id);
 if(props.length === 0) {
     return  <div className={styles.divRey}> --------------------Ubicacion no encontrada</div>
 }
 else {
    // acá va tu código
  return <div className={styles.divRey}>
            
            <div className={styles.foto}>

                {
                    (props.photo !== undefined)
                    ? <img src={props.photo} alt=''/>
                    : <img src='https://services.meteored.com/img/article/-por-que-las-nubes-no-se-caen--7332-1_1024.jpg' alt=''/>
                }
            </div>
            <div className={styles.contGral}>
                <Link style={{ textDecoration: 'none' }} to={`/ciudad/${props.name}`} >   
                    <div className={styles.titulo}>
                        {props.name ? <p>{props.name}</p> : <p>o</p>}
                        <div className={styles.icon}>
                            <img src={`https://openweathermap.org/img/wn/${props.img}@2x.png`} alt="o"/>
                        </div>
                    </div>

                    <div className={styles.contDatos1}>
                        <h5>TEMP.</h5>
                        <h5>{props.temp}°</h5>
                        
                        <h5>{props.desc}</h5>
                    </div>
                    
                    <div className={styles.contDatos2}>
                        <div >
                            <h5>Min</h5>
                            <h5>{props.min}°</h5>
                        </div>
                        <div >
                            <h5>Max</h5>
                            <h5>{props.max}°</h5>
                        </div>
                        <div >
                            <h5>Hum</h5>
                            <h5>{props.hum}%</h5>
                        </div>
                        <div >
                            <h5>Wind Speed</h5>
                            <h5>{props.wind} K/h</h5>
                        </div>
                    </div>
                </Link>
            </div> 
            </div>


}

  
}; 
