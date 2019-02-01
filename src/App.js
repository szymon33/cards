import React, { Component } from 'react';
import Game from './Game';
import './App.css';
import MenuItem from './MenuItem';
import Deck from './Deck';
import UserTable from './UserTable';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: new Game(),
      menuItems: [
        {
          id: 1,
          name: 'Draw card',
          className: 'take-btn',
          action: this.handleTakeOneCard.bind(this),
          active: () => true
        },
        {
          id: 2,
          name: 'Shuffle',
          className: 'shuffle-btn',
          action: this.handleShuffle.bind(this),
          active: () => true
        },
        {
          id: 3,
          name: 'Sort table',
          className: 'sorttable-btn',
          action: this.handleSortTable.bind(this),
          active: () => this.state.game.table.length > 1
        },
        {
          id: 4,
          name: 'Start over',
          className: 'startover-btn',
          action: this.handleStartOver.bind(this),
          active: () => (this.state.game.table.length > 0 || !this.state.game.deckIsOrdered)
        }
      ]
    };

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
          <div className='menu'>
            <div className='pure-button-group' role='group'>
              {
                this.state.menuItems.map((item) =>
                  <MenuItem key={item.id} data={item} />
                )
              }
            </div>
          </div>
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
