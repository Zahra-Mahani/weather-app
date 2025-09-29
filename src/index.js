function updateResult(city) {
  let apiKey = "12e40o825c4b3b48ba032531ct05303f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshDegree);
}
function refreshDegree(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let resultCity = document.querySelector("#city-result");
  resultCity.innerHTML = response.data.city;
}
function searchResult() {
  event.preventDefault();
  let cityElement = document.querySelector("#city");

  updateResult(cityElement.value);
}
let formElement = document.querySelector("#city-form");
formElement.addEventListener("submit", searchResult);
