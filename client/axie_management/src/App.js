import React from 'react';
import './App.css';
import Total_slp from './Total_slp';
import Battle_log from './Battle_log';
import Clock from './Clock'
// import Mmr_tracker from './mmr_tracker';

function App() {
const posX = "32px"
const posY = "32px"
  return (
    <div>
      
      {/* eslint-disable-next-line */}
      {/* <Total_slp /> */}
      {/* eslint-disable-next-line */}
      {/* <Clock />  */}
      <Battle_log />
      {/* varPosY={posY}/> */}
    </div>
  );
}

export default App;
