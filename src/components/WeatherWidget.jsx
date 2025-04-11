import React, { useState } from 'react';
import sunny from '../assets/sunny.png'
import partlyCloudy from '../assets/partly_cloudy.png'
import cloudy from '../assets/cloudy.png'
import lightRain from '../assets/light_rain.png'
import './WeatherWidget.css';


const WeatherWidget = ( ) => {
    return (
        <div class="hourly-forecast">
            <div class="scroll-container">
                <div class="hour">
                    <p> 1:00 pm</p>
                    <img src={sunny} alt="sunny image" />
                    <p> Sunny </p>
                    <p> 51° F </p>
                </div>
                <div class="hour">
                    <p > 2:00 pm</p>
                    <img src={sunny} alt="sunny image" />
                    <p> Sunny </p>
                    <p> 51° F </p>
                </div>
                <div class="hour">
                    <p > 3:00 pm</p>
                    <img src={partlyCloudy} alt="partially cloudy image" />
                    <p> Partly Cloudy </p>
                    <p> 50° F </p>
                </div>
                <div class="hour">
                    <p > 4:00 pm</p>
                    <img src={cloudy} alt="cloudy image" />
                    <p> Cloudy </p>
                    <p> 50° F </p>
                </div>
                <div class="hour">
                    <p > 5:00 pm</p>
                    <img src={lightRain} alt="light rain image" />
                    <p> Light Rain </p>
                    <p> 48° F </p>
                </div>
            </div>
        </div>
    );
};

export default WeatherWidget;