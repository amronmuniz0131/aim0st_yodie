import React, {useEffect, useState} from 'react'
import './total_slp.css';

function Total_slp(a) {
    const [totalSlp, getSlp] = useState([]);
    const userId = ['0x26d252724d08a30151ab5c87bd6b4fb5eadb1500','0xcc72a2ae194ce933bbd8893057de23fcd7f457ef', '0x7b661b64a72c42ae2f7552385dc27064a234691d'];
    var axios = require("axios").default;
    a = userId.map(b =>
      {return b = {
        method: 'GET',
        url: 'https://axie-infinity.p.rapidapi.com/get-update/'+b,
        params: {id: userId.userId},
        headers: {
          'x-rapidapi-host': 'axie-infinity.p.rapidapi.com',
          'x-rapidapi-key': '01ff0af53bmsh7c2736122730407p1465c3jsn237847b0957e'
        }
      }} )
      useEffect(()=>{
          a.map(c=> { return (
          axios.request(c)
          .then(
            (response) => {
            getSlp(response.data.slp);
          }).catch(function (error) {
            console.error(error);
          })
          
        )
        
      })
        //eslint-disable-next-line
      },[]);
    return (
      
      <div>
          <table className="table__border">
          <thead>
          <tr>  
            <th>Today</th>
            <th>Average</th>
            <th>Yesterday</th>
            <th>Total SLP</th>
          </tr>
          </thead>
          <tr>
              <td>{totalSlp.todaySoFar}</td>
              <td>{totalSlp.average}</td>
              <td>{totalSlp.yesterdaySLP}</td>
              <td>{totalSlp.total}</td>
          </tr>
          </table>
      </div>
    );
}

export default Total_slp
