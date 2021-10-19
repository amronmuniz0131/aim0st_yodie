import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://axie-infinity.p.rapidapi.com/get-axies/0x7bad5c65f2e2c53e65a5c32d330c070c337ce066',
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