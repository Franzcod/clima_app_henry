import React, {useState} from 'react'
// import Card from './Card.jsx'
import CardActual from './CardActual.jsx'
import Cards from './Cards.jsx';
import SearchBar from './SearchBar.jsx';
// import  { BuenosAires } from '../data'; 

// import fetchCoords from "../services/fetchCoords.js";

export default function PrincipalComp() {

  const apiKey   = process.env.REACT_APP_APIKEY;

  const [data, setData] = React.useState([]);

  React.useEffect(() =>  {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition((pos) =>  {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${apiKey}&units=metric`)
          .then(r => r.json())
          .then((recurso) => {
            if(recurso.main !== undefined){
              const city = {
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
                hum: recurso.main.humidity,
                desc: recurso.weather[0].description
                // photo: lugar
                // photo:'https://pixabay.com/api/?key=22672785-3e642bef2a1b2dd443100b49e&q='+recurso.name
              };
              setData(city);
            } else {
              alert("Ciudad no encontrada");
            }
          });
      });
  }, [apiKey]);

  console.log(data);

  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    const apiKey   = process.env.REACT_APP_APIKEY;
    // 
    const apiKey_3 = process.env.REACT_APP_APIKEY_3;
    // 
    let lugar;
    // 
    fetch(`https://api.unsplash.com/search/photos/?query=${ciudad}&client_id=${apiKey_3}`)
      .then(r => r.json())
      .then((recurso) => {
        console.log(recurso);
        if(recurso.total === 0){
          console.log('re mal la vida');
        }
        else lugar = recurso.results[1].urls.small;      
    });

    // console.log('funcion => '+ typeof lugar);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
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
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }


  return (
      <div>
          <nav >
              <SearchBar
              onSearch={onSearch}
              />
          </nav>
          
          <div  className='indiv'>
              {/*
                <Card
                
                  temp={BuenosAires.main.temp}
                  photo={BuenosAires.photo}
                  max={BuenosAires.main.temp_max}
                  min={BuenosAires.main.temp_min}
                  name={BuenosAires.name}
                  img={BuenosAires.weather[0].icon}
                
                />
              */}
              
              {data && <CardActual
                name={data.name}
                min={data.min}
                max={data.max}
                hum={data.hum}
                img={data.img}
                wind={data.wind}
                temp={data.temp}
                desc={data.desc}

              />}

          </div>
      
          <div>
              <Cards
              onClose={onClose}
              cities={cities}
              />
          </div>
      </div>
  )
}


