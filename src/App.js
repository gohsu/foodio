import React, { Component } from 'react';
import logo from './static/logo.svg';

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
          <input type = "userSearch" ></input>
          <button>Search</button>
          <body2 className="App-body2">
          <h3></h3>
          <h2> --------Reviews--------</h2>
          </body2>
          </body>
      </div>
    );
  }
}

export default App;
