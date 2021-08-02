// import fetchData from "./fetchData.js";

const apiKey = process.env.REACT_APP_APIKEY;

export default  function fetchCoords(lat, lon, setData) {
  //  fetchData(
  //   `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  // ).then((city) => {
  //   if (city) {
  //     setData((oldCities) => [...oldCities, city]);
  //   } else {
  //     alert("Ciudad no encontrada");
  //   }
  // });

  // const apiKey_3 = process.env.REACT_APP_APIKEY_3;
    // 
    // let lugar;
    // // 
    // fetch(`https://api.unsplash.com/search/photos/?query=${ciudad}&client_id=${apiKey_3}`)
    //   .then(r => r.json())
    //   .then((recurso) => {
    //     console.log(recurso);
    //     if(recurso.total === 0){
    //       console.log('re mal la vida');
    //     }
    //     else lugar = recurso.results[1].urls.small;      
    // });



  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
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
            
            // photo: lugar
            // photo:'https://pixabay.com/api/?key=22672785-3e642bef2a1b2dd443100b49e&q='+recurso.name
          };
          setData(city);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
