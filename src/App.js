import React, { useState } from "react";

import "./style.scss";
const api = {
  key: "2d730ae5df478b06fa385a42f118ec2c",
  url: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            className="search-bar"
            type="text"
            placeholder="Type city name ...."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
