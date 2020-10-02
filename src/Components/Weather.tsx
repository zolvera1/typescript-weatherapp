import IWeather from "../Components/IWeather";
import React, { Component } from "react";
type WeatherProps = {
  data: IWeather;
};
class Weather extends Component<WeatherProps, {}> {
  constructor(props: WeatherProps) {
    super(props);
  }
  render() {
    const { weather, main, name, sys } = this.props.data;
    const icon = weather[0].icon;
    const url = `http://openweathermap.org/img/w/${icon}.png`;
    var today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); 
    const yyyy = today.getFullYear();
    let current = mm + "/" + dd + "/" + yyyy;
    return (
      <div className="container">
        <div className="location-container">
          <div className="location">
            {name}, {sys?.country}
            <div className="date">{current}</div>
          </div>
        </div>
        <div className="weather-container">
          <div className="temp">{Math.floor(main.temp)}°F</div>
          <div className="weather">
            {weather[0].description.toUpperCase()}
            <img className="icon" src={url} alt="Weather Icon" />
          </div>
        </div>
      </div>
    );
  }
}
//change to celcius / fareihnheight pepega spelling
export default Weather;
