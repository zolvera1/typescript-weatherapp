
import IWeather from '../Components/IWeather'
import React, { Component } from "react";
type WeatherProps = {
  data: IWeather
}
class Weather extends Component<WeatherProps,{}> {
    constructor(props: WeatherProps) {
      super(props)
    }
  render() {
    const {coord, weather, main, name} = this.props.data
    return (
      <div className="container">
        <div className="location-container">
          <div className="location">
           {name}
            
            <div className="date">
              {new Date().toISOString()}
            </div>
          </div>
        </div>
        <div className="weather-container">
          <div className="temp">
              {main.temp}
          </div>
          <div className="weather">
            {weather[0].description}
          </div>
        </div>
      </div>
    );
  }
}
//change to celcius / fareihnheight pepega spelling
export default Weather;
