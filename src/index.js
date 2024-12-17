function updateWeather(response) {
   let temperature = document.querySelector("h2");
   let temp = response.data.temperature.current;
   temperature.innerHTML = Math.round(temp);
}
function searchCity(city) {
    let apiKey = "6b05a8dfda109b43fffatb4do4059432";
    let apiUrl = "https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apikey}&units=metric";
axios.get(apiUrl).then(updateWeather)
}
function searchButton(event) {
    event.preventDefault();
    let citySubmitted = document.querySelector("#textForm");
    let cityEntered = document.querySelector("header")
    cityEntered.innerHTML = citySubmitted.value;
    searchCity(citySubmitted.value);
}
let searchInput = document.querySelector("#input-form");
searchInput.addEventListener("click", searchButton);
