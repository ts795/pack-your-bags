const fetch = require('node-fetch');

function getWeather(city, startDate, endDate){
    // var city = 
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=01edf62c59a57233d6fe7cbdaa44e8a2'

    fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    
      for(let i = 0; i < data.list.length; i++){
        console.log(data.list[i]);

      }
      
      
      
      // cityName.textContent = data[0].list[]; 
      // temperature.src=data[0].;
      // status.textContent = data[0].;

    
  });
}

getWeather('Seattle');