const argv = require('yargs').argv;

let apiKey = 'ec35cc5bf4e579330b737329b77b2117';
let city = argv.c || 'seattle';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
const request = require('request');

request(url, function (err, response, body) {
    if(err){
        console.log('error:', error);
    } else {
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
    }
});

