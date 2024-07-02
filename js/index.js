import { animateBrand } from './animation.js';

// Call the animation function when the page loads
document.addEventListener("DOMContentLoaded", () => {
  animateBrand();
});


// Declaring all necessary DOM elements
const app = document.querySelector(".weather-app");
const temp = document.querySelector(".temp");
const dateOutput = document.querySelector(".date");
const timeOutput = document.querySelector(".time");
const conditionOutput = document.querySelector(".condition");
const nameOutput = document.querySelector(".name");
const icon = document.querySelector(".icon");
const cloudOutput = document.querySelector(".cloud");
const humidityOutput = document.querySelector(".humidity");
const windOutput = document.querySelector(".wind");
const form = document.getElementById("locationInput");
const search = document.querySelector(".search");
const btn = document.querySelector(".submit");
const cities = document.querySelectorAll(".city");
const alertBox = document.querySelector(".alert");

// Default city declaration when the page loads
let cityInput = "Manila";

// Gathering the cities in the panel with forEach method and applying click events
cities.forEach(city => {
  city.addEventListener("click", (e) => {
    cityInput = e.target.innerHTML;
    fetchWeatherData();
    app.style.opacity = "0";
  });
});

// Submit listener to form
form.addEventListener("submit", e => {
  if (search.value.length === 0) {
    alertBox.classList.add("alertActive");
  } else {
    cityInput = search.value;
    fetchWeatherData();
    search.value = "";
    app.style.opacity = "0";
  }
  e.preventDefault();
});

// Function that returns a day of the week from date data
function dayOfTheWeek(day, month, year) {
  const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekDay[new Date(`${year}-${month}-${day}`).getDay()];
}

// Main function that fetches data from Weather API back to website display
function fetchWeatherData() {
  fetch(`http://api.weatherapi.com/v1/current.json?key=608641f6c67a4d0c9f943456240207&q=${cityInput}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Log the data to ensure it is being fetched correctly
      temp.innerHTML = `${data.current.temp_c}&#176;`;
      conditionOutput.innerHTML = data.current.condition.text;

      const date = data.location.localtime;
      const year = parseInt(date.substr(0, 4));
      const month = parseInt(date.substr(5, 2));
      const day = parseInt(date.substr(8, 2));
      const time = date.substr(11);

      dateOutput.innerHTML = `${dayOfTheWeek(day, month, year)} ${day}, ${month}, ${year}`;
      timeOutput.innerHTML = time;
      nameOutput.innerHTML = data.location.name;

      const iconId = data.current.condition.icon.split("/").pop();
      icon.src = `http:${data.current.condition.icon}`;

      cloudOutput.innerHTML = `${data.current.cloud}%`;
      humidityOutput.innerHTML = `${data.current.humidity}%`;
      windOutput.innerHTML = `${data.current.wind_kph}km/h`;

      let timeOfDay = data.current.is_day ? "day" : "night";
      const code = data.current.condition.code;

      if (code === 1000) {
        app.style.backgroundImage = `url(./images/${timeOfDay}/clear.jpg)`;
      } else if ([
        1003, 1006, 1009, 1030, 1069, 1087,
        1135, 1273, 1276, 1279, 1282].includes(code)) {
        app.style.backgroundImage = `url(./images/${timeOfDay}/cloudy.jpg)`;
      } else if ([1063, 1072, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1201, 1240, 1243, 1246].includes(code)) {
        app.style.backgroundImage = `url(./images/${timeOfDay}/rainy.jpg)`;
      } else if ([1066, 1069, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1255, 1258, 1261, 1264].includes(code)) {
        app.style.backgroundImage = `url(./images/${timeOfDay}/snowy.jpg)`;
      }
      app.style.opacity = "1";
    })
    .catch(error => {
      console.error("Fetch error:", error);
      alert("City not found");
      app.style.opacity = "1";
    });
}
