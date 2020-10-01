import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Config from './Config'
import { useState } from "react";
import Weather from "./Components/Weather";
import axios from "axios";
import IWeather from "./Components/IWeather";

const App = () => {
  const [weatherData, setWeatherData] = useState<IWeather>({
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
    },
    weather: [],
    id: 0,
    name: "",
  });

  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.KeyboardEvent) => {
    if (e.key == "Enter") {
      axios
      .get<IWeather>(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=${Config.API_KEY}`
      )
      .then((result) => {
        console.log(result);
        setWeatherData(result.data);
      });
    }

   
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    setQuery(e.target.value);
  }
  return (
    <div className="App">
      <main>
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onKeyPress={handleSubmit}
            value={query}
            onChange= {handleChange}
          />
        </div>
        {weatherData.weather[0] ? <Weather data={weatherData}/> : ('')}
      </main>
    </div>
  );
};
export default App;
