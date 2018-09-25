
  
//iterate over each section and attach relevant data
export function populateFocusWeather(json, images) {
    
  //populate 'focus' details (main upper section of page)
  const details = ['focus-type', 'focus-temp', 'focus-pic-container', 'location'];
   details.forEach(e => {
     document.getElementById(e).innerHTML =
        e === 'focus-type' ? json.list[0].weather[0].main:
        //multiplication and division to achieve temperature to 1 decimal place where required
        e === 'focus-temp' ? Math.round(json.list[0].main.temp * 10 ) / 10 + " o".sup() + "C":
        e === 'location' ? json.city.name + ', ' + json.city.country:
        '<i class="' + images[json.list[0].weather[0].main].icon + ' focus-img"></i>';
  });
}