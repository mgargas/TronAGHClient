import React from 'react';

import Menu from './components/Menu/Menu';
import Banner from './components/Banner/Banner'

import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <header>
        <img alt="logo" src={logo}/>
        
      </header>
      <Banner />
      <div className="page-wrapper">

      <Menu />
      </div>
  
    </div>
  );
}

export default App;
