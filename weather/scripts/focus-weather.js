export function populateFocusWeather(json, images, currentWeather) {
    
  //populate 'focus' (main upper section of page) details using div ids
  const ids = ['focus-type', 'focus-temp', 'focus-pic-container', 'location'];

  //iterate over each id and attach relevant data
  ids.forEach( e => {
    document.getElementById(e).innerHTML =
      e === 'focus-type' ? currentWeather:
      //multiplication and division to achieve temperature to 1 decimal place where required
      e === 'focus-temp' ? Math.round(json.list[0].main.temp * 10 ) / 10 + " o".sup() + "C":
      e === 'location' ? json.city.name + ', ' + json.city.country:
      '<i class="' + images[currentWeather].icon + ' focus-img"></i>';
  });
}