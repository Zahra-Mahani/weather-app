function updateResult(city) {
  let apiKey = "12e40o825c4b3b48ba032531ct05303f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshDegree);
}
function refreshDegree(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let condition = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let time = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  time.innerHTML = formatDate(date);
  temperatureElement.innerHTML = Math.round(temperature);
  let resultCity = document.querySelector("#city-result");
  resultCity.innerHTML = response.data.city;
  condition.innerHTML = response.data.condition.description;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  wind.innerHTML = `${response.data.wind.speed} km/h`;
  console.log(response.data);
}
function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}
function searchResult() {
  event.preventDefault();
  let cityElement = document.querySelector("#city");

  updateResult(cityElement.value);
}
let formElement = document.querySelector("#city-form");
formElement.addEventListener("submit", searchResult);
