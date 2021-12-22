import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
pageSize=9;
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          
          <Routes>
            <Route exact path="/" element={<div><News setProgress={this.setProgress}  apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country="in" category="general"/></div>}/>
            <Route exact path="/general" element={<div><News setProgress={this.setProgress} apiKey={this.apiKey}  key="1" pageSize={this.pageSize} country="in" category="general"/></div>} />
            <Route exact path="/business" element={<div><News setProgress={this.setProgress}  apiKey={this.apiKey}  key="2" pageSize={this.pageSize} country="in" category="business"/></div>} />
            <Route exact path="/entertainment" element={<div><News setProgress={this.setProgress}  apiKey={this.apiKey}  key="3" pageSize={this.pageSize} country="in" category="entertainment"/></div>} />
            <Route exact path="/health" element={<div><News setProgress={this.setProgress}  apiKey={this.apiKey}  key="4" pageSize={this.pageSize} country="in" category="health"/></div>} />
            <Route exact path="/science" element={<div><News setProgress={this.setProgress} apiKey={this.apiKey}  key="5" pageSize={this.pageSize} country="in" category="science"/></div>} />
            <Route exact path="/sports" element={<div><News setProgress={this.setProgress}  apiKey={this.apiKey}  key="6" pageSize={this.pageSize} country="in" category="sports"/></div>} />
            <Route exact path="/technology" element={<div><News setProgress={this.setProgress}  apiKey={this.apiKey}  key="7" pageSize={8} country="in" category="technology"/></div>} />      
          </Routes>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
        </Router>
      </div>
    )
  }
}