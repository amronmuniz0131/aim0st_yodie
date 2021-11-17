import React, {useEffect, useState} from 'react'
import './total_slp.css';
import axios from 'axios';

function Total_slp(a) {
    
  const [totalSlp, getSlp] = useState([]);
  const [overAll, getOverAll] = useState([]);

    const userId = ['0x26d252724d08a30151ab5c87bd6b4fb5eadb1500','0xcc72a2ae194ce933bbd8893057de23fcd7f457ef', '0x7b661b64a72c42ae2f7552385dc27064a234691d'];
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
    
    //console.log(userId[0]);

    
      useEffect(()=>{
        for (let index = 0; index < userId.length; index++) {
          axios.request(getTotal(userId[index], index))
          .then(
            (response) => {
              total.push(response.data.slp);
              //console.log(total);
              getOverAll(total)
              //console.log(response.data.slp);

              getSlp(response.data.slp);

          }).catch(function (error) {
            console.error(error);
          })
        }
      },[]);

      console.log(overAll);

      
       //   a = userId.map(b =>
    //   {
    //     return 
        
    // } )
    
      // let b = {
      //   method: 'GET',
      //   url: 'https://axie-infinity.p.rapidapi.com/get-update/0x26d252724d08a30151ab5c87bd6b4fb5eadb1500',
      //   params: {id: userId.userId},
      //   headers: {
      //     'x-rapidapi-host': 'axie-infinity.p.rapidapi.com',
      //     'x-rapidapi-key': '01ff0af53bmsh7c2736122730407p1465c3jsn237847b0957e'
      //   }
      // }

      // let c = {
      //   method: 'GET',
      //   url: 'https://axie-infinity.p.rapidapi.com/get-update/0xcc72a2ae194ce933bbd8893057de23fcd7f457ef',
      //   params: {id: userId.userId},
      //   headers: {
      //     'x-rapidapi-host': 'axie-infinity.p.rapidapi.com',
      //     'x-rapidapi-key': '01ff0af53bmsh7c2736122730407p1465c3jsn237847b0957e'
      //   }
      // }

      // let d = {
      //   method: 'GET',
      //   url: 'https://axie-infinity.p.rapidapi.com/get-update/0x7b661b64a72c42ae2f7552385dc27064a234691d',
      //   params: {id: userId.userId},
      //   headers: {
      //     'x-rapidapi-host': 'axie-infinity.p.rapidapi.com',
      //     'x-rapidapi-key': '01ff0af53bmsh7c2736122730407p1465c3jsn237847b0957e'
      //   }
      // }

        // axios.request(b)
        //   .then(
        //     (response) => {
        //       console.log(response.data.slp);
        //     getSlp(response.data.slp);
        //   }).catch(function (error) {
        //     console.error(error);
        //   })

        //   axios.request(c)
        //   .then(
        //     (response) => {
        //       console.log(response.data.slp);
        //     getSlp(response.data.slp);
        //   }).catch(function (error) {
        //     console.error(error);
        //   })

        //   axios.request(d)
        //   .then(
        //     (response) => {
        //       console.log(response.data.slp);
        //     getSlp(response.data.slp);
        //   }).catch(function (error) {
        //     console.error(error);
        //   })

        //a.map(c=> { 
        //   return (
          
          

          
          
        // )
        
      //})
        //eslint-disable-next-line
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
          
          <tbody>
            {
               overAll.forEach((element) => {
                console.log(element['average']);
               return <tr>
                  <td>{element['todaySoFar']}</td>
                  <td>{element['average']}</td>
                  <td>{element['yesterdaySLP']}</td>
                  <td>{element['total']}</td>
                </tr>
               })
            }
          </tbody>
         
          </table>
        
      </div>
    ); 
}

export default Total_slp
