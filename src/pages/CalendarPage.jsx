import React, { useState } from 'react';
import './Calendar.css';



const CalendarPage = ( {CurrentDay} ) => {
    return (
        <div class="weather-app">
            <div class="current-weather">
                <h2> Philadelphia, PA</h2>
                <a href="/">Wednesday, January 26th</a>
            </div>

            <div class="calendar">
                <table>
                    <tr>
                        <th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>
                    </tr>
                    <tr>
                        <td></td><td></td><td></td><td>1  32°F</td><td>2  35°F</td><td>3  40°F</td><td>4  42°F</td>
                    </tr>
                    <tr>
                        <td>5  38°F</td><td>6  41°F</td><td>7  44°F</td><td>8  39°F</td><td>9  36°F</td><td>10  37°F</td><td>11  43°F</td>
                    </tr>
                    <tr>
                        <td>12  45°F</td><td>13  46°F</td><td>14  42°F</td><td>15  40°F</td><td>16  38°F</td><td>17  41°F</td><td>18  43°F</td>
                    </tr>
                    <tr>
                        <td>19  46°F</td><td>20  48°F</td><td>21  50°F</td><td>22  47°F</td><td>23  44°F</td><td>24  42°F</td><td>25  41°F</td>
                    </tr>
                    <tr>
                        <td class ="curr-day">26  51°F</td><td>27  48°F</td><td>28  50°F</td><td>29  47°F</td><td>30  44°F</td><td>31  42°F</td><td></td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default CalendarPage
