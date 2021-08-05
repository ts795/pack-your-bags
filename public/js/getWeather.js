function getWeather(){
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily?id={city ID}&cnt={cnt}&appid=01edf62c59a57233d6fe7cbdaa44e8a2'

    fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

      var cityName = document.querySelector('#alcohol');//points to the alcohol name in html
      var temperature = document.querySelector('#drink-append');//points to the image of the drink
      var status= document.querySelector('#desc');// points to span id in html
      
      
      cityName.textContent = data[0].name; 
      temperature.src=data[0];
      status.textContent = data[0].description + " Suggested Food Pairings: " + data[0].food_pairing;

    
  });
}
