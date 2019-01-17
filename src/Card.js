import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.suit = this.props.value[0];
    this.rank = this.props.value.slice(1, 3);
    this.bgColour = this.suit == '♥' || this.suit == '♦' ? 'card--red' : 'card--black';
  }

  render() {
    return (
      <div className={'card ' + this.bgColour }>
        <div className='card__suit card__suit--top'>{this.suit}</div>
        <div className='card__rank'>{this.rank}</div>
        <div className='card__suit card__suit--bottom'>{this.suit}</div>
      </div>
    );
  }
}

export default Card;
