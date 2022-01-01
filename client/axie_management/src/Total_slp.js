import React, {useEffect, useState} from 'react'
import './total_slp.css';
import axios from 'axios';

function Total_slp(a) {
    // eslint-disable-next-line
  const [totalSlp, getSlp] = useState([]);
  const [overAll, getOverAll] = useState([]);

    const userId = [
    '0xdcb426edd4ffae49f1379d64afe7dfd66c48fde6',
    '0xcc72a2ae194ce933bbd8893057de23fcd7f457ef',
    '0x7b661b64a72c42ae2f7552385dc27064a234691d',
    '0x91044c1b50fa4b6037ef86f38f677ade34aae9eb',
    '0x6edf6c3f4dba71e2c1a3534e79356157650e0ba4',
    '0x4ccc0a0c57da177cd2a4c7686e73b663aea83d14',
    '0x2bad77142595332ef0a223ab3c0cb7e1e7123592',
    '0x23aa7b10e65d4edfaaeec9d6a3a554afac3bd08b'];
    const total = []; 


    function getTotal(userId, i) {
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
              console.log(total);
              getOverAll(total)
              //console.log(response.data.slp);

              getSlp(response.data);

          }).catch(function (error) {
            console.error(error);
          })
        }
        // eslint-disable-next-line
      },[]);
    return (
      
      <div>
          <table className="table__border">
            <thead>
              <tr>  
                <th>Name</th>
                <th>Rank</th>
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
                      <td>{post.leaderboard.rank}</td>
                      {post.slp.todaySoFar < 100? <td className="average" style={{color: "red", fontWeight: "bold"}}>{post.slp.todaySoFar}</td>:<td className="average" style={{color: "green"}}>{post.slp.todaySoFar}</td>}
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
