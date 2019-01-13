import React, { Component } from 'react';

class UserTable extends Component {
  setupBgColor(val) {
    return (val[0] == 'H' || val[0] == 'D') ? 'red' : 'black';
  }

  renderList() {
    let cards = this.props.cards;
    if (cards != undefined && cards.length != 0) {
      return (
        cards.map((card, i) =>
          <div className='pure-u-1 pure-u-sm-1-2 pure-u-md-1-4 pure-u-lg-1-8'>
            <div key={card}
                 className={'card ' + this.setupBgColor(card) }
                 onClick={() => this.props.giveCardBack(card) }>
              <div>{card[0]}</div>
              <div>{card.slice(1, 3)}</div>
            </div>
          </div>
        )
      );
    } else {
      return <div className='pure-u-1-1 no-cards-msg'>No card on the table. Take a card or shuffle.</div>
    }
  }

  render() {
    return (
      <div className='pure-g'>
         { this.renderList() }
      </div>
    );
  }
}

export default UserTable;
