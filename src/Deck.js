import React, { Component } from 'react';

class Deck extends Component {
  shuffledInfo() {
    return this.props.deckIsOrdered === true ? 'Deck is ordered.' : 'Deck is shuffled.';
  }

  render() {
    return (
      <div className='pure-g'>
        <div className='pure-u-1-1'>
          <aside className='deck'>
            <p>{ this.props.noOfCards } cards left in the deck. {this.shuffledInfo()}</p>
           </aside>
         </div>
      </div>
    );
  }
}

export default Deck;
