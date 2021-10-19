import React, {useEffect, useState} from 'react'
import './total_slp.css';

function Total_slp(userId) {
    const [totalSlp, getSlp] = useState([]);
    var axios = require("axios").default;
    var options = {
      method: 'GET',
      url: 'https://axie-infinity.p.rapidapi.com/get-update/'+userId.userId,
      params: {id: userId.userId},
      headers: {
        'x-rapidapi-host': 'axie-infinity.p.rapidapi.com',
        'x-rapidapi-key': '01ff0af53bmsh7c2736122730407p1465c3jsn237847b0957e'
      }
    };
    useEffect(()=>{
      axios.request(options)
      .then(
        (response) => {
        getSlp(response.data.slp);
      }).catch(function (error) {
        console.error(error);
      }) 
    },[])
    
    return (
      <div>
          <table className="table__border">
          <tr>
            <th>Today</th>
            <th>Average</th>
            <th>Yesterday</th>
            <th>Total SLP</th>
          </tr>
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
