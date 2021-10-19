import React from 'react';
import './App.css';
import Total_slp from './Total_slp';
import Battle_log from './Battle_log';

function App() {

  const userId = ['0x26d252724d08a30151ab5c87bd6b4fb5eadb1500','0xcc72a2ae194ce933bbd8893057de23fcd7f457ef', '0x7b661b64a72c42ae2f7552385dc27064a234691d'];
  return (
    <div>
      {/* eslint-disable-next-line */}
      
      {userId.map (users => <Total_slp userId={users}/>)}
      {/* eslint-disable-next-line */}
      <Battle_log />
    </div>
  );
}

export default App;
