//function to handle any error in api call
export function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

//fetch data from api
export function getData() {
  const url='https://api.openweathermap.org/data/2.5/forecast?q=London,GB&units=metric&appid=c73ba9db4e80a01ed143a90d6a017168';
  return fetch(url);
}