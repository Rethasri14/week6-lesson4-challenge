function displayCurrentDateTime() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let newDay = days[now.getDay()];
  let newHour = now.getHours();
  let newMinutes = now.getMinutes();

  let formattedTime = `${newDay} ${newHour}:${newMinutes}`;
  document.querySelector(".new-details").innerHTML = formattedTime;
}

function searchCity() {
  let cityInput = document.getElementById("city-input").value.trim();

  if (cityInput !== "") {
    document.querySelector(".current-city").innerHTML = cityInput;
  } else {
    alert("Please enter a city.");
  }
}

displayCurrentDateTime();

document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    searchCity();
  });
