import React, { Component } from 'react';
import Card from './Card';

class UserTable extends Component {
  renderList() {
    let cards = this.props.cards;
    if (cards != undefined && cards.length != 0) {
      return (
        cards.map((card) =>
          <div className='pure-u-1 pure-u-sm-1-2 pure-u-md-1-4 pure-u-lg-1-8'
               onClick={() => this.props.giveCardBack(card) }
               key={card}>
            <Card value={card} />
          </div>
        )
      );
    } else {
      return <div className='pure-u-1-1 no-cards-msg'>No card on the table. Draw a card or shuffle the deck.</div>
    }
  }

  render() {
    return (<div className='pure-g'>{ this.renderList() }</div>);
  }
}

export default UserTable;
