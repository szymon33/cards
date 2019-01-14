import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.suit = this.props.value[0];
    this.rank = this.props.value.slice(1, 3);
    this.bgColour = this.suit == 'H' || this.suit == 'D' ? 'red' : 'black';
  }

  render() {
    return (
      <div className={'card ' + this.bgColour }>
        <div>{this.rank}</div>
        <div>{this.suit}</div>
      </div>
    );
  }
}

export default Card;
