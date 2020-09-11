import React from "react";
import logo from "./logo.svg";
import "./App.css";
import config from "./config";
import {useState} from 'react'
function App() {
  const [weather, setWeather] = useState("")
  return (
    <div className="App">
      <main>
        <div className="search-container">
          <input 
          type="text" 
          className="search-bar" 
          placeholder="Search..."/>
        </div>
      </main>
    </div>
  );
}

export default App;
