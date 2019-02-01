import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Deck extends Component {
  shuffledInfo() {
    return this.props.deckIsOrdered === true ? 'Deck is ordered.' : 'Deck is shuffled.';
  }

  render() {
    return (
      <div className='pure-g'>
        <div className='deck pure-u-1 pure-u-sm-1-2 pure-u-md-1-4 pure-u-lg-1-8'>
          <div className='card'>
            <p className='deck--left'><span>{ this.props.noOfCards }</span> cards <br />left in the deck.</p>
            <p className='deck--shuffled'>{this.shuffledInfo()}</p>
           </div>
         </div>
      </div>
    );
  }
}

Deck.propTypes = {
  deckIsOrdered:  PropTypes.bool.isRequired,
  noOfCards: PropTypes.number.isRequired
};

export default Deck;
