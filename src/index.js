function searchResult() {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let resultCity = document.querySelector("#city-result");
  resultCity.innerHTML = cityElement.value;
}
let formElement = document.querySelector("#city-form");
formElement.addEventListener("submit", searchResult);
