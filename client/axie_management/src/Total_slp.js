import React, {useEffect, useState} from 'react'
import './total_slp.css';
import axios from 'axios';

function Total_slp(a) {
    // eslint-disable-next-line
  const [totalSlp, getSlp] = useState([]);
  const [overAll, getOverAll] = useState([]);

    const userId = [
    '0x5794b7fb0b775ac5c891b26ca065f9b105015369',
    '0xedd7eb8e8d93c3c510cd4326897c3cb94ddf0f46',
    '0xdd4047f0764d07f4095a7bc3611a39ff811b7c9e',
    '0x5946cf6ae7afca1ab41bc3e69c42f63bc9dd3128',
    '0x3208a8a470df54b098858bc210b6c9f308e977f8',
    '0x98dd7deca3389ff95df9a8cd5b8f181f8b3d7fb9',
    '0xf769c117a225042747ee66d80c36a23856afc4dc',
    '0x83313263a1be9b403aebd1348884a6a6c8e6e575'];
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
              // console.log(total);
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
