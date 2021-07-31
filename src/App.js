import React from 'react';
import './App.css';
import './normalize.css';
import Titulo from './components/Titulo.jsx';
import DatosCiudad from './components/DatosCiudad.jsx';
import Footer from './components/Footer.jsx';
import OptionsRoute from './components/OptionsRoute.jsx';
import PrincipalComp from './components/PrincipalComp.jsx';

import About from './components/About.jsx';

// import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';


function App() {

  // cities.filter(c => c.id === parseInt(match.params.ciudadId))
  
  return (
    <div className="App">

      <Route 
        path='/' 
        component={Titulo}
      />

      <Route 
        path='/' 
        component={OptionsRoute}
      />

      <Route     
        exact   
        path='/about'
        component={About}
      />

      <Route
        exact
        path='/'
        component={PrincipalComp}
      />

      <Route
        path='/'
        component={Footer}
      />


      <Route
        path='/ciudad/:ciudad'
        render={({match})=> <DatosCiudad ciudad={match.params.ciudad}/>}
      />

    </div>
  );

  }

  export default App;

