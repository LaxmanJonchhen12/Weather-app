// function to get weather details
async function getWeatherDetails() {
  try {
    // getting the input value from user
    let inputValue = document.getElementById("cityName").value;

    // fetching data from the api
    let apiData = await fetch(
      `https:api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=4514609972ef74679728c0ac177054dd&units`
    );
    console.log(apiData);

    // converting the json data to object
    let jsonData = await apiData.json();

    console.log(jsonData);
    document.getElementById("city").textContent = "City: " + jsonData.name;
    document.getElementById("temperature").textContent =
      "Temperature  " + " " + Math.ceil(jsonData.main.temp) + "°C";
    console.log(jsonData.main.temp);
    let tempC = Math.ceil(jsonData.main.temp);

    let tempF = Math.ceil(tempC * 1.8 + 32);

    document.getElementById("description").textContent =
      "Description : " + jsonData.weather[0].description;

    // calculating value in fahrenheit
    function showF() {
      document.getElementById("temperature").textContent =
        "Temperature: " + " " + tempF + "°F";
    }

    // calculating value in celsius
    function showC() {
      document.getElementById("temperature").textContent =
        "Temperature:  " + " " + Math.ceil(jsonData.main.temp) + "°C";
    }

    document.getElementById("temperature").addEventListener("click", () => {
      let textContent = document.getElementById("temperature").textContent;
      console.log(textContent);
      if (textContent.includes("°C")) {
        showF();
      } else {
        showC();
      }
    });
  } catch (error) {
    document.getElementById("city").textContent = "city not found";
    document.getElementById("temperature").textContent = "?°C";
    document.getElementById("description").textContent =
      "please enter correct city name";
    document.querySelector;
  } finally {
    document.getElementById("cityName").value = "";
  }
}

document.querySelector("#search").addEventListener("click", getWeatherDetails);
document.querySelector("#cityName").addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    getWeatherDetails();
  }
});
