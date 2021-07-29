

import React, { useState ,useEffect} from 'react';
// import '../fecha.js'

export default function Titulo() {

    const [dia, setDia] = useState();
    const [mes, setMes] = useState();
    const [anio, setAnio] = useState();

    useEffect(() => {
        const meses = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ];
        
        let fecha = new Date();
        let hoy =  fecha.getDate();
        let mes =  meses[fecha.getMonth()];
        let anio = fecha.getFullYear();

        setDia(hoy)
        setMes(mes)
        setAnio(anio)
      },[]);

  return <div className="tit-app">
            <img alt=''/>
            <h2>Clima App</h2>
            <img src='https://cdn.pixabay.com/photo/2016/05/20/20/20/weather-1405870_640.png'  alt="" />

            <div className="contFecha">
                
                <p  className="dia">{dia}</p>
                <p  className="mes">{mes}</p>
                <p  className="año">{anio}</p>
            </div>

        </div>
            
          
};








