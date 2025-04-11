import React, { useState } from 'react';
import sunny from '../assets/sunny.png'
import './HomePage.css';
import WeatherWidget from '../components/WeatherWidget';
import CalendarPage from './CalendarPage';



const HomePage = ( {CurrentDay} ) => {
  return (
    <div className="home">
      <div className="current-weather">
          <div className="info"> Philadelphia, PA</div>
          <p className="temp"> 51° F </p>
          <a className="info" href="/CalendarPage"> {CurrentDay} </a>
          <img src={sunny} alt="current weather image" />
          <p className="forecast"> Sunny </p>
      </div>
      <div className="weekly-forecast">
        <WeatherWidget />
      </div>
    </div>
  );
};

export default HomePage;
