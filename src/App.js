import './App.css';

import React, { useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App = () => {
  const pageSize= 9;
  const countryParam = new URLSearchParams(window.location.search).get('country');
  const [country, setCountry] = useState(countryParam || 'in');
  //const [country,setCountry]= useState("in");
  const apikey= process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const changeCountry = (cty) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('country', cty);
    window.location.href = `${window.location.pathname}?${urlParams.toString()}`;
  };
  
    return (
      <>
    <Router basename='/smartnews'>
    <Navbar changecountry={changeCountry}/>
    <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
        //onLoaderFinished={() => setProgress(0)}
      />
      <div className="container-fluid">
    <Routes>
    <Route exact path="/" element={<News setProgress={setProgress}  apikey={apikey}  key="general" pageSize={pageSize} country={country} category="general"/>} /> 
          <Route exact path="/Business" element={<News setProgress={setProgress}  apikey={apikey} key="business" pageSize={pageSize} country={country} category="business"/>} /> 
          <Route exact path="/Entertainment" element={<News setProgress={setProgress} apikey={apikey}  key="entertainment" pageSize={pageSize} country={country} category="entertainment"/>} /> 
          <Route exact path="/General" element={<News setProgress={setProgress} apikey={apikey}  key="general" pageSize={pageSize} country={country} category="general"/>} /> 
          <Route exact path="/Health" element={<News setProgress={setProgress}  apikey={apikey} key="health" pageSize={pageSize} country={country} category="health"/>} /> 
          <Route exact path="/Science" element={<News setProgress={setProgress} apikey={apikey}  key="science" pageSize={pageSize} country={country} category="science"/>} /> 
          <Route exact path="/Sports" element={<News setProgress={setProgress} apikey={apikey}  key="sports" pageSize={pageSize} country={country} category="sports"/>} /> 
          <Route exact path="/Technology" element={<News setProgress={setProgress} apikey={apikey}  key="technology" pageSize={pageSize} country={country} category="technology"/>} />
    </Routes>
    </div>
    </Router>
    </>
    )
}
export default App;
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
