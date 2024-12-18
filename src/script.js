function changeWeather(response) {
    let temperatureElement= document.querySelector("h2");
    let temperature= response.data.temperature.current;
    let humidityElement = document.querySelector("#humidity");
    let humidity = response.data.temperature.humidity;
    let windElement = document.querySelector("#wind");
    let wind = response.data.wind;
    let conditionElement = document.querySelector("#condition-description");
    let condition = response.data.condition.description;
    let iconElement = document.querySelector("#icon");
    let icon = response.data.conition.icon;
    let city= document.querySelector("header");
   
    city.innerHTML= searchInput.value;
    temperatureElement.innerHTML= Math.round(temperature);
    humidityElement.innerHTML= humidity;
    windElement.innerHTML = wind;
    conditionElement.innerHTML = condition;
    iconElement.innerHTML = icon;

}
function weatherUpdate(city){
    let apiKey = "6b05a8dfda109b43fffatb4do4059432";
    let apiUrl = "https://api.shecodes.io/weather/v1/current?query=${city}&key=6b05a8dfda109b43fffatb4do4059432&units=metric"; 
axios.get(apiUrl).then(changeWeather);
}
function searchFormInput(event) {
    event.preventDefault();
    let searchInput= document.querySelector("#text-form");
    
    weatherUpdate(searchInput.value);
}
let searchFormElement = document.querySelector("#input-form");
searchFormElement.addEventListener("click", searchFormInput);