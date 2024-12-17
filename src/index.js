function searchButton(event) {
    event.preventDefault();
    let citySubmitted = document.querySelector("#textForm");
    let cityEntered = document.querySelector("header")
    cityEntered.innerHTML = citySubmitted.value;
}
let searchInput = document.querySelector("#input-form");
searchInput.addEventListener("click", searchButton)




