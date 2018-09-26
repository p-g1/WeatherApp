import * as focusWeather from './focus-weather.js';
import * as forecast from './forecast.js';
import * as images from './images.js';

//get api data
const http = new XMLHttpRequest();
const url='https://api.openweathermap.org/data/2.5/forecast?q=London,GB&units=metric&appid=c73ba9db4e80a01ed143a90d6a017168';

http.open('GET', url, true);
http.send();
http.onreadystatechange = function() {
  var json = JSON.parse(http.response);         
  const currentWeather = json.list[0].weather[0].main;
  var date = new Date();
            
  //set long hand date  
  document.getElementById('dateToday').innerHTML = date.toLocaleString('en-gb', {weekday: 'long', day: 'numeric', month: 'long'});
            
  //set main background and icon from json
  document.body.style.backgroundImage = 'url("' + images.pictures[currentWeather].background; + '")';
           
  focusWeather.populateFocusWeather(json, images.pictures, currentWeather);

  forecast.populateFiveDay(json, images.pictures);
  };