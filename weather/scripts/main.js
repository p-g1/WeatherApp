import * as api from './api.js';
import * as focusWeather from './focus-weather.js';
import * as forecast from './forecast.js';
import * as images from './images.js';

//get api data
api.getData().then(api.handleErrors)
             .then(response => {
                return response.json();
            })
            .then(json => {  
              const currentWeather = json.list[0].weather[0].main;
              var date = new Date();
            
              //set long hand date  
              document.getElementById('dateToday').innerHTML = date.toLocaleString('en-gb', {weekday: 'long', day: 'numeric', month: 'long'});
            
              //set main background and icon from json
              document.body.style.backgroundImage = 'url("' + images.pictures[currentWeather].background; + '")';
           
              focusWeather.populateFocusWeather(json, images.pictures, currentWeather);

              forecast.populateFiveDay(json, images.pictures);
            });