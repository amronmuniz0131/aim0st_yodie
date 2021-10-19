import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://axie-infinity.p.rapidapi.com/get-update/0x26d252724d08a30151ab5c87bd6b4fb5eadb1500',
  params: {id: '0x26d252724d08a30151ab5c87bd6b4fb5eadb1500'},
  headers: {
    'x-rapidapi-host': 'axie-infinity.p.rapidapi.com',
    'x-rapidapi-key': '01ff0af53bmsh7c2736122730407p1465c3jsn237847b0957e'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});