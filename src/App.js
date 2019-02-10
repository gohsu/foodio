import React, { Component } from 'react';
import logo from './static/logo.svg';
import {yelpRating, yelpReviewCount} from './components/ratings'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* creating the header for the website
        */}
        <header className="App-header">
          <img src={logo} alt="logo" />
        </header>
          <body className={"App-body"}>

          <h1>Input Restaurant Name</h1>
          <input type="text" name="id" input id="searchBar" className="form-control"
    placeholder="Enter your search term...."/>
          <button>Search</button>
          <body2 className="App-body2">
          <h3></h3>
          <h2> --------Rating--------</h2>
          </body2>
          </body>
      </div>
    );
  }
}

export default App;
