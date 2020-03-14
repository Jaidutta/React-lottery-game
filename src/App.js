import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ball from './Ball';
import Lottery from './Lottery'
function App() {
  return (
    <div className="App">
      <div className="">
        <Lottery />
        <Lottery title='Monday Lotto' balls={4} maxNum={10} />
      </div>
      
    </div>
  );
}

export default App;
