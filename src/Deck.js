import React, { Component } from 'react';

class Deck extends Component {
  render() {
    return (
      <div className='pure-g'>
        <div className='pure-u-1-1'>
          <aside className='deck'>
            <p>{ this.props.noOfCards } cards left in the deck</p>
           </aside>
         </div>
      </div>
    );
  }
}

export default Deck;
