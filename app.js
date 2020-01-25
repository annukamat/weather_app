// WEATHER APP
var request = require('request')

//here we used 'darksky api' to fetch the data of weather app
// const url = "https://api.darksky.net/forecast/6e295be4ed71a50a13e930dca1e43160/37.8267,-122.4233"

// request({ url: url, json: true }, (error, response) => {
//     if(error) {
//         console.log('unable to connect to the weather app!')
//     } 
//     else if(response.body.error) {
//         console.log('unable to find location')
//     } 
    
//     else{
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.tempreture + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
//     }
// })

//for the geo coding we used "mapbox"
// geocoding 
// Address => lat/long -> weather

const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5udTEyMzQ1IiwiYSI6ImNrNXF6dHAzdTA3aWMzZW1sNGhlb2Zrd2YifQ.5F-fYF9UJlH3hSSgntprKw"
request({ url: geocodeURL, json: true }, (error, response) => {
   if(error) {
       console.log('unable to connect to the location servic!')
   } else if(response.body.features.length === 0) {
        console.log('unable to find the location.Try another search!')
   } else {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)
   }
})

// ERROR HANDLING