import React from 'react';

import Card from './Card';

import styles from './Cards.module.css';

export default function Cards( {cities, onClose}) {

  
  
  const listCities = cities.map((city) =>
    
    <Card
      id={city.id}
      key={city.id}
      photo={city.photo}
      name={city.name}
      temp={city.temp}
      max={city.max}
      min={city.min}
      img={city.img}
      onClose={()=> onClose(city.id)}
    >
    </Card>
  );


  return <ul className={styles.cont}>{listCities}</ul>
            
          
};