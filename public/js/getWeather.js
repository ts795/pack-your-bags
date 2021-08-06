function getWeather(){
    var city = 
    var requestUrl = 'api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=01edf62c59a57233d6fe7cbdaa44e8a2'

    fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

      var cityName = document.querySelector('#alcohol');

      var temperature = document.querySelector('#drink-append');

      var status= document.querySelector('#desc');
      
      
      cityName.textContent = data[0].; 
      temperature.src=data[0].;
      status.textContent = data[0].;

    
  });
}
