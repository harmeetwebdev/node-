const request = require('request');

const url = " http://api.weatherapi.com/v1/current.json?key=4e85dec5a5a7414895964800220310&q=india&aqi=no"

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log("the unable to load page please try sometimes")
    } else {

        console.log('the temperature is ' + response.body.current.temp_c + ' and the chance of rain is ' + response.body.current.precip_mm)
    }
})