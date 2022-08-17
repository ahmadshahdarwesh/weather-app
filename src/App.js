import React, { useEffect, useState } from "react";

import "./style.scss";
const data = {
  key: "2d730ae5df478b06fa385a42f118ec2c",
  url: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [info, setInfo] = useState("");
  const [weather, setWeather] = useState({});
  console.log(weather);
  const search = (event) => {
    event.preventDefault();
    fetch(`${data.url}weather?q=${info}&units=metric&APPID=${data.key}`)
      .then((res) => res.json())
      .then((response) => {
        setWeather(response);
        console.log(response);
      });
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "Jun",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.weather[0].main.includes("Clouds")
            ? "cloudy"
            : "app" || weather.weather[0].main.includes("Clear")
            ? "sunny"
            : "app" || weather.weather[0].main.includes("Rainy")
            ? "rain"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <form onSubmit={search}>
            <input
              className="search-bar"
              type="text"
              placeholder="Type city name ...."
              onChange={(e) => setInfo(e.target.value)}
              value={info}
              // onKeyUp={search}
            />
          </form>
        </div>
        {typeof weather.main !== "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name},{weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temperature">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="Rainy">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
