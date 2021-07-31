import React, {useState} from 'react'
import Card from './Card.jsx'
import Cards from './Cards.jsx';
import SearchBar from './SearchBar.jsx';
import  { BuenosAires } from '../data'; 

export default function PrincipalComp() {

        const [cities, setCities] = useState([]);
      
        function onSearch(ciudad) {
          const apiKey   = process.env.REACT_APP_APIKEY;
          // const apiKey_2 = process.env.REACT_APP_APIKEY_2;
          const apiKey_3 = process.env.REACT_APP_APIKEY_3;
          // const lugar=ciudad;
          let lugar;
          // hihi
          //https://api.unsplash.com/search/photos/?query=miami&client_id=YPK1yyj4bYpif0QMyU07NG0qjB5t-AFDZ9mXXT0l1xs
          // https://api.unsplash.com/search/collections/?query=paris&client_id=YPK1yyj4bYpif0QMyU07NG0qjB5t-AFDZ9mXXT0l1xs&categorie=places
          fetch(`https://api.unsplash.com/search/photos/?query=${ciudad}&client_id=${apiKey_3}`)
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
                <Card
                
                temp={BuenosAires.main.temp}
                photo={BuenosAires.photo}
                max={BuenosAires.main.temp_max}
                min={BuenosAires.main.temp_min}
                name={BuenosAires.name}
                img={BuenosAires.weather[0].icon}
                
                />
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


