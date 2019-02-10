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
      </div>
    );
  }
}

export default App;
