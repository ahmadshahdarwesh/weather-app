import React, { useState } from "react";
const api = {
  key: "2d730ae5df478b06fa385a42f118ec2c",
  url: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="app">
      <container>
        <div className="search-box">
          <input
            className="search-bar"
            type="text"
            placeholder="Type city name ...."
          />
        </div>
      </container>
    </div>
  );
}

export default App;
