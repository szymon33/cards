import React, { Component } from 'react';
import Game from './Game';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu'

class App extends Component {
  constructor(props) {
    super(props);
    this.game = new Game();
  }

  takeOneCard() {
    this.game.takeOneCard();
  }

  shuffle() {
    this.game.shuffle();
  }

  startOver() {
    this.game.startOver();
  }

  sortTable() {
    this.game.sortTable();
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <div className='hero'>
            <div className='hero-title'>
              <h1>Deck of Cards</h1>
            </div>
          </div>
          <Menu
            takeOneCard={ this.takeOneCard.bind(this) }
            shuffle={ this.shuffle.bind(this) }
            startOver={ this.startOver.bind(this) }
            sortTable={ this.sortTable.bind(this) }
          />
        </div>
      </div>
    );
  }
}

export default App;
