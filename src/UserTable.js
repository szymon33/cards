import React, { Component } from 'react';

class UserTable extends Component {
  setupBgColor(val) {
    return (val[0] == 'H' || val[0] == 'C') ? 'red' : 'black';
  }

  renderList() {
    let cards = this.props.cards;
    if (cards != undefined && cards.length != 0) {
      return (
        cards.map((card, i) =>
          <div key={i}
               className={'pure-u-1-12 card  ' + this.setupBgColor(card) }
               onClick={() => this.props.giveCardBack(card) }>
            {card}
          </div>
        )
      );
    } else {
      return <div className='pure-u-1-1'>No card on the table. Take a card.</div>
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
