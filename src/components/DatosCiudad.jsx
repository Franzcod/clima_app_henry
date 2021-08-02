import React, {useState ,useEffect} from 'react'
import styles from './DatosCiudad.module.css';
import BackdropFilter from "react-backdrop-filter";


export default function DatosCiudad(props) {

    const [citie, setCitie] = useState([]);
      
        useEffect(() => {
          const apiKey   = process.env.REACT_APP_APIKEY;
          const apiKey_3 = process.env.REACT_APP_APIKEY_3;
          // const lugar=ciudad;
          let lugar;
          fetch(`https://api.unsplash.com/search/photos/?query=${props.ciudad}&client_id=${apiKey_3}`)
            .then(r => r.json())
            .then((recurso) => {
              console.log(recurso);
              if(recurso.total === 0){
                console.log('re mal la vida');
              }
              else lugar = recurso.results[1].urls.small;
              // else console.log(recurso.results[0].urls.small)
            
          });
          
          // console.log('funcion => '+ typeof lugar);
      
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.ciudad}&appid=${apiKey}&units=metric`)
            .then(r => r.json())
            .then((recurso) => {
              if(recurso.main !== undefined){
                const ciudad = {
                  min: Math.round(recurso.main.temp_min),
                  max: Math.round(recurso.main.temp_max),
                  img: recurso.weather[0].icon,
                  id: recurso.id,
                  wind: recurso.wind.speed,
                  temp: recurso.main.temp,
                  name: recurso.name,
                  weather: recurso.weather[0].main,
                  clouds: recurso.clouds.all,
                  latitud: recurso.coord.lat,
                  longitud: recurso.coord.lon,
                  photo: lugar
                  // photo:'https://pixabay.com/api/?key=22672785-3e642bef2a1b2dd443100b49e&q='+recurso.name
                };
                setCitie(ciudad);
              } else {
                alert("Ciudad no encontrada");
              }
            });
        },[props.ciudad]); // eslint-disable-next-line

        console.log(citie.name);

        var backgroudConFoto = {
            backgroundColor: 'rgba(255,255,255,0.)',
            backgroundImage: `url('${citie.photo}')`,
            backgroundSize: 'cover',
            // backdropFilter: 'blur(36px)',
            padding: '10px',
          };

        // var divRey = {
        //     padding: '10px',
        // }

    return (
      <BackdropFilter
        
      filter={"blur(10px) sepia(50%)"}
      >
        <div style={backgroudConFoto}>
            {/* <div className={styles.espacioSup}></div> */}
            <div  className={styles.cont}>
                <div  className={styles.contPrinc}>
                    <div className={styles.contImg}>
                        <img src={citie.photo} alt=''/>
                    </div>

                    <div className={styles.tarjetaAbout}>      
                        <h2>{citie.name}</h2>
                        <div className="info">
                            <div>Temperatura: {citie.temp} ºC</div>
                            <div>Clima: {citie.weather}</div>
                            <div>Viento: {citie.wind} km/h</div>
                            <div>Cantidad de nubes: {citie.clouds}</div>
                            <div>Latitud: {citie.latitud}º</div>
                            <div>Longitud: {citie.longitud}º</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </BackdropFilter>
    )
}
