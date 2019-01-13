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
  }

  takeOneCard() {
    this.state.game.takeOneCard();
    this.setState({ game: this.state.game });
  }

  shuffle() {
    this.state.game.shuffle();
    this.setState({ game: this.state.game });
  }

  startOver() {
    this.state.game.startOver();
    this.setState({ game: this.state.game });
  }

  sortTable() {
    this.state.game.sortTable();
    this.setState({ game: this.state.game });
  }

  giveCardBack(card) {
    this.state.game.giveCardBack(card);
    this.setState({ game: this.state.game });
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
          <Deck
            noOfCards={this.state.game.deck.length }
            deckIsOrdered={this.state.game.deckIsOrdered }
          />
          <UserTable
            cards={ this.state.game.table }
            giveCardBack={ this.giveCardBack.bind(this) }
          />
        </div>
      </div>
    );
  }
}

export default App;
