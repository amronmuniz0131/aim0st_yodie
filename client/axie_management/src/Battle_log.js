import React, {useEffect, useState} from 'react'
import axios from 'axios';

function Battle_log() {
    const [totalSlp, getSlp] = useState([]);
    const options = {
        method: 'GET',
        url: 'https://axie-infinity.p.rapidapi.com/get-battle-log/0xcc72a2ae194ce933bbd8893057de23fcd7f457ef',
        headers: {
          'x-rapidapi-host': 'axie-infinity.p.rapidapi.com',
          'x-rapidapi-key': '01ff0af53bmsh7c2736122730407p1465c3jsn237847b0957e'
        }
      };
      {useEffect(()=>{
        axios.request(options)
        .then(
          (response) => {
            console.log(response.data[0].items[0]);
        }).catch(function (error) {
          console.error(error);
        })
    },[])
    return (
        <div>
          
        </div>
    )
}
}

export default Battle_log
