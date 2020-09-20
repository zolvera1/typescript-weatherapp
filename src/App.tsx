import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import config from "./config";
import {useState} from 'react'
import Weather from "./Components/Weather";
import axios from 'axios';


// type AppState = {
//   weather: {};
    //query: string;
 // like this
// };
class App extends React.Component {
//  state: WeatherState = {
//    weather: {}
//  }

 handleSubmit = (e: React.KeyboardEvent) => {
   if(e.key == 'Enter') {
    alert('Hello!')
   }
   //axios call 
 } 
  render() {
    return (
      <div className="App">
      <main>
        <div className="search-container">
          <input 
          type="text" 
          className="search-bar" 
          placeholder="Search..."
          onKeyPress={this.handleSubmit}/>
          
        </div>
        
      </main>
    </div>
    );
  }
}
export default App;
 