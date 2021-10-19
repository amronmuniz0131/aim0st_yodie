import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://axie-infinity.p.rapidapi.com/get-daily/0xbb8e1da7cc8b222ba0d2e1e634653abea68e9771',
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