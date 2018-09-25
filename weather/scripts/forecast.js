  //populate 5 day forecast data
  export const days = document.getElementById('five-day-container').children,
         daysArray = Object.values(days).map(x=>x.id);
  
  export function populateFiveDay(json, images) {
      
      daysArray.forEach((e, i) => {
        
        //set fresh date so can incrememnt by index each index correctly
        var date = new Date();
        
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
                     //add correct weather icon
                     id === 'pic' ? '<i class="' + images[json.list[i*8].weather[0].main].icon + '"></i>':
                     //add shorthand date
                     id === 'date' ? date.toLocaleString('en-gb').slice(0, 5):
                     //multiplication and division to achieve temperature to 1 decimal place where required
                     Math.round(json.list[i*8].main.temp * 10 ) / 10 + " o".sup() + "C";
                  });
       });
    };  