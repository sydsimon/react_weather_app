import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import sunny from './assets/sunny.png'
import HomePage from './pages/HomePage';
import CalendarPage from './pages/CalendarPage';


function App() {
  const [currDay, setCurrDay] = useState("Wednesday, January 26th");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage CurrentDay={currDay}/>} />
          <Route path="/CalendarPage" element={<CalendarPage CurrentDay={currDay}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


