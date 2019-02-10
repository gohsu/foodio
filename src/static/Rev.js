let yelpAPI = require('yelp-api');

// Create a new yelpAPI object with your API key
let apiKey = 'JsK559hp0ZfSJrH0DXGJjsbMolHQ-CM0E60HMSV5SlmJ_sKgdXutZoL8aS0TA25Se-C6yNM1pvhLSL-5L5ro6B7QJEnlpF0ifrtrTL_dLMhzS4jM8HS6CrnFFzdfXHYx';
let yelp = new yelpAPI(apiKey);

// Set any parameters, if applicable (see API documentation for allowed params)

let businessId = 'four-barrel-coffee-san-francisco';

// Call the endpoint
yelp.query(`businesses/${businessId}/reviews`)
    .then(data => {
        // Success
       var fields = JSON.parse(data);
        var name1 = JSON.stringify(fields.reviews[0].text);
        var name2  = JSON.stringify(fields.reviews[1].text);
        var name3 = JSON.stringify(fields.reviews[2].text);
        console.log(name1+"\n");
        console.log(name2+"\n");
        console.log(name3);


    })
    .catch(err => {
        // Failure
        console.log(err);
    });