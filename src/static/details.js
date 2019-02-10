
/*
This class pulls restaurant info from Yelp
and prints it out.

Yelp search is done by business ID
 */
//import App from './App/


let yelpAPI = require('yelp-api');

// Create a new yelpAPI object with your API key
let apiKey = 'JsK559hp0ZfSJrH0DXGJjsbMolHQ-CM0E60HMSV5SlmJ_sKgdXutZoL8aS0TA25Se-C6yNM1pvhLSL-5L5ro6B7QJEnlpF0ifrtrTL_dLMhzS4jM8HS6CrnFFzdfXHYx';
let yelp = new yelpAPI(apiKey);

let businessId = 'drNjH8Z63cgp8FWXh2hahA';//App.document.getElementById('searchBar').value;
yelp.query(`businesses/${businessId}`)
    .then(response => {
        // Success
        var fields = JSON.parse(response);
        const yelpPhone= fields.phone;
        const yelpCuisine = fields.alias;
        //const yelpDist = fields.distance.toString();
        console.log('phone number: '+yelpPhone+"\n");
        console.log('Type of cuisine: '+yelpCuisine);
        //console.log('It is: '+yelpDist+' meters away!');
    })
    .catch(err => {
        // Failure
        console.log(err);
    });

