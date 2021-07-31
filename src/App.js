import React from 'react';
import './App.css';
import './normalize.css';
import Titulo from './components/Titulo.jsx';
import Footer from './components/Footer.jsx';
import OptionsRoute from './components/OptionsRoute.jsx';
import PrincipalComp from './components/PrincipalComp.jsx';

import About from './components/About.jsx';

// import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';


function App() {
  
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
        path='/about'
        component={About}
      />

      <Route
        path='/home'
        component={PrincipalComp}
      />

      <Route
        path='/'
        component={Footer}
      />



      
      
      
    </div>
  );

  }

  export default App;

