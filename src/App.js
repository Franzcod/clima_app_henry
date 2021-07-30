import React, { useState }  from 'react';
import './App.css';
import './normalize.css';
// import './fecha.js'
import Titulo from './components/Titulo.jsx';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import  { BuenosAires } from './data.js'; 

function App() {

  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    // const apiKey = 'aecd0c9e9001d8886987e2cd59a4b048';
    const apiKey   = process.env.REACT_APP_APIKEY;
    const apyKey_2 = process.env.REACT_APP_APIKEY_2;
    // const lugar=ciudad;
    let lugar;
    
    fetch(`https://pixabay.com/api/?key=${apyKey_2}&q=${ciudad}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.total === 0){
          console.log('re mal la vida');
          
        }
        else lugar = recurso.hits[0].webformatURL;
        // 
        
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
    <div className="App">

      <Titulo/>

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
      <hr />
        <p>Francisco Palacios Dev</p>
      <hr />
      
    </div>
  );
}

export default App;
