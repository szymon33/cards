import React, { Component } from 'react';
import Game from './Game';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Deck from './Deck';
import UserTable from './UserTable';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { game: new Game() };

    this.handleTakeOneCard = this.handleTakeOneCard.bind(this);
    this.handleShuffle = this.handleShuffle.bind(this);
    this.handleStartOver = this.handleStartOver.bind(this);
    this.handleSortTable = this.handleSortTable.bind(this);
    this.handleGiveCardBack = this.handleGiveCardBack.bind(this);
  }

  handleTakeOneCard() {
    this.setState((state) => {
      state.game.takeOneCard();
      return { game: state.game };
    });
  }

  handleShuffle() {
    this.setState((state) => {
      state.game.shuffle();
      return { game: state.game };
    });
  }

  handleStartOver() {
    this.setState((state) => {
      state.game.startOver();
      return { game: state.game };
    });
  }

  handleSortTable() {
    this.setState((state) => {
      state.game.sortTable();
      return { game: state.game };
    });
  }

  handleGiveCardBack(card) {
    this.setState((state) => {
      state.game.giveCardBack(card);
      return { game: state.game };
    });
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
            takeOneCard={ this.handleTakeOneCard }
            shuffle={ this.handleShuffle }
            startOver={ this.handleStartOver }
            sortTable={ this.handleSortTable }
          />
          <Deck
            noOfCards={this.state.game.deck.length }
            deckIsOrdered={this.state.game.deckIsOrdered }
          />
          <UserTable
            cards={ this.state.game.table }
            giveCardBack={ this.handleGiveCardBack }
          />
        </div>
      </div>
    );
  }
}

export default App;
