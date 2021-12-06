import React, {useEffect, useState} from 'react'
import './total_slp.css';
import axios from 'axios';

function Total_slp(a) {
    
  const [totalSlp, getSlp] = useState([]);
  const [overAll, getOverAll] = useState([]);

    const userId = ['0xdcb426edd4ffae49f1379d64afe7dfd66c48fde6','0x26d252724d08a30151ab5c87bd6b4fb5eadb1500','0xcc72a2ae194ce933bbd8893057de23fcd7f457ef', '0x7b661b64a72c42ae2f7552385dc27064a234691d'];
    const total = []; 


    function getTotal(userId, i) {
      console.log('https://axie-infinity.p.rapidapi.com/get-update/'+userId);
      return {
        method: 'GET',
        url: 'https://axie-infinity.p.rapidapi.com/get-update/'+userId,
        params: {id: userId.userId},
        headers: {
          'x-rapidapi-host': 'axie-infinity.p.rapidapi.com',
          'x-rapidapi-key': '01ff0af53bmsh7c2736122730407p1465c3jsn237847b0957e'
        }
      }
    }
    
      useEffect(()=>{
        for (let index = 0; index < userId.length; index++) {
          axios.request(getTotal(userId[index], index))
          .then(
            (response) => {
              total.push(response.data);
              //console.log(total);
              getOverAll(total)
              //console.log(response.data.slp);

              getSlp(response.data);

          }).catch(function (error) {
            console.error(error);
          })
        }
      },[]);
      console.log(overAll)
    return (
      
      <div>
          <table className="table__border">
            <thead>
              <tr>  
                <th>Name</th>
                <th>Today</th>
                <th>Average</th>
                <th>Yesterday</th>
                <th>Adventure</th>
                <th>Total SLP</th>
              </tr>
            </thead>
                 {overAll.map(post =>
                    <tbody> 
                      <td>{post.leaderboard.name}</td>
                      <td>{post.slp.todaySoFar}</td>
                      <td>{post.slp.average}</td> 
                      <td>{post.slp.yesterdaySLP}</td> 
                      <td>{post.adventure.gained_slp}/{post.adventure.max_slp}</td>
                      <td>{post.slp.total}</td> 
                    </tbody>)}

         
          </table>
        
      </div>
    ); 
}

export default Total_slp
