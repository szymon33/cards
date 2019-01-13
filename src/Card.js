import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className='pure-u-12 card'>
        { this.props.value }
      </div>
    );
  }
}

export default Card;
