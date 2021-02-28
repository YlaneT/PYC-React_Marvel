import React from 'react';
//import logo from './logo.svg';
import marvel_logo from './resources/marvel_logo.png';
import './App.css';
import Routes from './config/router';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={marvel_logo} className="App-logo" alt="logo" />
      </header>
      <Routes/>
    </div>
  );
}

export default App;
