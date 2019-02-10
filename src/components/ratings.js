let businessId = 'drNjH8Z63cgp8FWXh2hahA';
let yelpAPI = require('yelp-api');

// Create a new yelpAPI object with your API key
let apiKey = 'JsK559hp0ZfSJrH0DXGJjsbMolHQ-CM0E60HMSV5SlmJ_sKgdXutZoL8aS0TA25Se-C6yNM1pvhLSL-5L5ro6B7QJEnlpF0ifrtrTL_dLMhzS4jM8HS6CrnFFzdfXHYx';
let yelp = new yelpAPI(apiKey);

// Set any parameters, if applicable (see API documentation for allowed params)

// Call the endpoint
yelp.query(`businesses/${businessId}`)
    .then(response => {
        // Success
        var fields = JSON.parse(response);
        const yelpRating = fields.rating;
        const yelpReviewCount = fields.review_count;
    })
    .catch(err => {
        // Failure
        console.log(err);
    });


