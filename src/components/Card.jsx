import React from 'react';
import styles from './Card.module.css';
// import { Delete } from '@material-ui/icons';
import Cancel from '@material-ui/icons/Cancel';
import { Link } from 'react-router-dom';


export default function Card(props) {
  // console.log('En Card: '+ props.id);
 

  // acá va tu código
  return <div className={styles.div}>
            
              <div className={styles.foto}>
                <div className={styles.iconCont} onClick={props.onClose}>
                  {props.onClose && <Cancel className={styles.iconCancel} color="primary" />}
                </div>
                {
                  (props.photo !== undefined)
                  ? <img src={props.photo} alt=''/>
                  : <img src='https://services.meteored.com/img/article/-por-que-las-nubes-no-se-caen--7332-1_1024.jpg' alt=''/>
                }
              </div>
            <Link to={`/ciudad/${props.name}`} >   
              <div className={styles.titulo}>
                <p>{props.name}</p>
                <div className={styles.icon}>
                  <img src={`https://openweathermap.org/img/wn/${props.img}@2x.png`} alt="nube_icon"/>
                </div>
              </div>

              <div className={styles.temp}>
                  <h5>Temp</h5>
                  <h5>{(props.temp).toFixed(2)}°</h5>
              </div>

              <div className={styles.contTemps}>
                <div >
                  <h5>Min</h5>
                  <h5>{(props.min).toFixed(2)}°</h5>
                </div>
                <div >
                  <h5>Max</h5>
                  <h5>{(props.max).toFixed(2)}°</h5>
                </div>
              </div>
            </Link>
         </div>
}; 
