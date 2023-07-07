import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  pageSize= 9;
  render() {
    return (
      <>
    <Router basename='/smartnews'>
    <Navbar />
      <div className="container">
    <Routes>
    <Route exact path="/" element={<News key="general" pageSize={this.pageSize} country="in" category="general"/>} /> 
          <Route exact path="/Business" element={<News key="business" pageSize={this.pageSize} country="in" category="business"/>} /> 
          <Route exact path="/Entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>} /> 
          <Route exact path="/General" element={<News key="general" pageSize={this.pageSize} country="in" category="general"/>} /> 
          <Route exact path="/Health" element={<News key="health" pageSize={this.pageSize} country="in" category="health"/>} /> 
          <Route exact path="/Science" element={<News key="science" pageSize={this.pageSize} country="in" category="science"/>} /> 
          <Route exact path="/Sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports"/>} /> 
          <Route exact path="/Technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology"/>} />
    </Routes>
    </div>
    </Router>
    </>
    )
  }
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
//9f0ae2c8163e4c11806a6725af68e366
export default App;*/
