type WeatherProps = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
import React, { Component } from "react";
class Weather extends Component<WeatherProps> {
    
  render() {
    const {coord, weather, base, main, visibility, wind, clouds, dt, sys, timezone, id, name, cod}: WeatherProps = this.props;
    return (
      <div className="container">
        <div className="location-container">
          <div className="location">
            <div className="date"></div>
          </div>
        </div>
        <div className="weather-container">
          <div className="temp">
              
          </div>
        </div>
      </div>
    );
  }
}
//change to celcius / fareihnheight pepega spelling
export default Weather;
