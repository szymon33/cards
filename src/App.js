import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Deck of Cards
        </header>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
