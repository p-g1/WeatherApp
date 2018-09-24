const url='https://api.openweathermap.org/data/2.5/forecast?q=London,GB&units=metric&appid=c73ba9db4e80a01ed143a90d6a017168';

//handle any error in api call
function handleErrors(response) {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
}

//fetch data from api
fetch(url).then(handleErrors)
          .then(function(response) {
              return response.json();
            })
          .then(function(json) {

  //capture date
  var date = new Date(); 
  document.getElementById('dateToday').innerHTML = date.toLocaleString('en-gb', {weekday: 'long', day: 'numeric', month: 'long'});

  // set background depending on current weather
  const images = {'Thunderstorm': {'background': '../background/Thunderstorm.jpg', 'icon': 'fas fa-bolt'},
                       'Drizzle': {'background': '../background/Drizzle.jpg', 'icon': 'fas fa-tint'},   
                       'Rain' : {'background': '../background/Rain.jpg', 'icon': 'fas fa-umbrella'},
                       'Snow': {'background': '../background/Snow.jpg', 'icon': 'fas fa-snowflake'},
                       'Clear': {'background': '../background/Clear.jpg', 'icon': 'far fa-sun'},
                       'Clouds' : {'background': '../background/Clouds.jpg', 'icon': 'fas fa-cloud'}};

  document.body.style.backgroundImage = 'url("' + images[json.list[0].weather[0].main].background; + '")';

  //populate 'focus' details (main upper section of page)
  const details = ['focus-type', 'focus-temp', 'focus-pic-container', 'location'];
  
  //iterate over each and attach relevant data
  details.forEach(e => {
    document.getElementById(e).innerHTML =
      e === 'focus-type' ? json.list[0].weather[0].main:
      //multiplication and division to achieve 2 decimal places
      e === 'focus-temp' ? Math.round(json.list[0].main.temp * 10 ) / 10 + " o".sup() + "C":
      e === 'location' ? json.city.name + ', ' + json.city.country:
      '<i class="' + images[json.list[0].weather[0].main].icon + ' fa-10x focus-img"></i>';
  })
 
  //populate 5 day forecast data
  const days = document.getElementById('five-day-container').children,
        daysArray = Object.values(days).map(x=>x.id);
  
  daysArray.forEach((e, i) => {
    //set fresh date so can incrememnt by index each index correctly
    date = new Date();
    date.setDate(date.getDate() + i);
    //grab array of children and map to their ids
    const childArray = Object.values(document.getElementById(e).children);
    childArray.map(m => m.id)
              //loop over to test for id prefix and edit innerHTML accordingly
              .forEach(x => {
                const id = x.slice(0, x.length-1); 
                document.getElementById(x).innerHTML = 
                //index*8 used to get one regular daily reading. API provides 3 hourly (24/3 = 8)
                  id === 'type' ? json.list[i*8].weather[0].main:
                  id === 'pic' ? '<i class="' + images[json.list[i*8].weather[0].main].icon + ' fa-3x"></i>':
                  id === 'date' ? date.toLocaleString('en-gb').slice(0, 5):
                  //multiplication and division to achieve 2 decimal places
                  Math.round(json.list[i*8].main.temp * 10 ) / 10 + " o".sup() + "C";
              });
  });  
});