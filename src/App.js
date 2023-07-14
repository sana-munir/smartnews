import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  pageSize= 9;
  apikey= process.env.REACT_APP_NEWS_API;
  state = {
    progress:0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
    <Router basename='/smartnews'>
    <Navbar />
    <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
        //onLoaderFinished={() => setProgress(0)}
      />
      <div className="container">
    <Routes>
    <Route exact path="/" element={<News setProgress={this.setProgress}  apikey={this.apikey}  key="general" pageSize={this.pageSize} country="in" category="general"/>} /> 
          <Route exact path="/Business" element={<News setProgress={this.setProgress}  apikey={this.apikey} key="business" pageSize={this.pageSize} country="in" category="business"/>} /> 
          <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>} /> 
          <Route exact path="/General" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="general" pageSize={this.pageSize} country="in" category="general"/>} /> 
          <Route exact path="/Health" element={<News setProgress={this.setProgress}  apikey={this.apikey} key="health" pageSize={this.pageSize} country="in" category="health"/>} /> 
          <Route exact path="/Science" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="science" pageSize={this.pageSize} country="in" category="science"/>} /> 
          <Route exact path="/Sports" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="sports" pageSize={this.pageSize} country="in" category="sports"/>} /> 
          <Route exact path="/Technology" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="technology" pageSize={this.pageSize} country="in" category="technology"/>} />
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
