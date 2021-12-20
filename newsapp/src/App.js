import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<div><News key="general" pageSize={8} country="in" category="general"/></div>}/>
            <Route exact path="/general" element={<div><News key="1" pageSize={8} country="in" category="general"/></div>} />
            <Route exact path="/business" element={<div><News key="2" pageSize={8} country="in" category="business"/></div>} />
            <Route exact path="/entertainment" element={<div><News key="3" pageSize={8} country="in" category="entertainment"/></div>} />
            <Route exact path="/health" element={<div><News key="4" pageSize={8} country="in" category="health"/></div>} />
            <Route exact path="/science" element={<div><News key="5" pageSize={8} country="in" category="science"/></div>} />
            <Route exact path="/sports" element={<div><News key="6" pageSize={8} country="in" category="sports"/></div>} />
            <Route exact path="/technology" element={<div><News key="7" pageSize={8} country="in" category="technology"/></div>} />      
          </Routes>
        </Router>
      </div>
    )
  }
}