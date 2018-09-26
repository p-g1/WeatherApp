# WeatherApp

## App details

Simple single location weather app providing a 5 day forecast. 
Data is pulled in from the openweathermap.com api.
Server created in Express.js.
Deployed to and hosted on Heroku.

——————

## Hosting

The app can be found hosted through [Heroku](http://pgweatherapp.herokuapp.com)


——————

## Running the app from source code

- Clone repository to your own directory

- Navigate to the root directory in a command line window

- Run the command ‘node server.js’

- Head to localhost:8080 in your browser

——————


## Things I would add/change 

### Features

#### Location search

I would like to add the ability to search for weather in other locations. I’d suggest a search bar with typeahead/auto-complete.


#### Geolocation

It would be handy to let the browser determine the user location and present the weather relevant to that.

-

### Improvements

#### Weather reading times

The API provides weather statistics on a 3-hourly basis. Given that my app uses a single daily weather point, I needed to select a single reading.

As the first reading in the 5 day forecast is for the day the app is used, the first reading is taken from the 3 hour window in which the app is activated. For consistency, I then used the same time window for all subsequent days forecast.

This doesn’t seem very robust as in many situations someone would be looking at the weather for the following 5 days in the evening, perhaps planning daytime activities. In that scenario the app wouldn’t give the best guide. 

This would need to be discussed with the client/user to understand better their requirements.

#### Cross-device compatability

Effort has been made to design a responsive app. Testing has shown it to be consistent across landscape oriented devices / screens of different sizes however portrait oriented screens are not yet catered for. At very least I'd like to add feedback in portrait orientation that the user should rotate their device.

#### User error feedback

I would like to provide the user with an error message in the event the api returns no data. Currently they get nothing. This could be as simple as a black screen with a message to try later.

-

### Technical Debt:

#### CSS Clean Up / Sass implementation:

In current form CSS has a mis-match of unit types (vw/vh/%) from testing for responsive design. This should be cleaned up.

Styling is all done in plain CSS. The file could be made more maintainable using a pre-processor like Sass.


#### Testing:

Other than catching an API response error there are no tests. Some would need to be written.


#### Security:

Personal API Key isn't masked currently. I'm hoping the hackers aren't trying to use my weather API. Should be fixed.
