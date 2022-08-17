import React, { useState } from "react";

import "./style.scss";
const data = {
  key: "2d730ae5df478b06fa385a42f118ec2c",
  url: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [info, setInfo] = useState("");
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(
        `"${data.url}weather?i=${info}&units=metric&APPID=${data.key}`
      ).then(
        ((resp) => resp.json()).then((result) => {
          setInfo("");
          setWeather(result);
          console.log(result);
        })
      );
    }
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
    let date = d.getDay();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div className="app sunny">
      <main>
        <div className="search-box">
          <input
            className="search-bar"
            type="text"
            placeholder="Type city name ...."
            onChange={(e) => setInfo(e.target.value)}
            value={info}
            onKeyUp={search}
          />
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
              <div className="temperature">23°C</div>
              <div className="Rainy">Rainy</div>
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
