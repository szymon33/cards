import React, { Component } from 'react';

class UserTable extends Component {
  renderList() {
    let cards = this.props.cards;
    if (cards != undefined && cards.length != 0) {
      return (
        cards.map((card, i) =>
          <div key={i} className='pure-u-1-12 card'>{card}</div>
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
