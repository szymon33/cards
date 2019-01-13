import React, { Component } from 'react';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='pure-g menu'>
        <div className='pure-button-group' role='group'>
          <button onClick={this.props.shuffle}className='pure-button shuffle-btn'>Shuffle</button>
          <button onClick={this.props.takeOneCard} className='pure-button take-btn'>Take card</button>
          <button onClick={this.props.sortTable}className='pure-button sorttable-btn'>Sort table</button>
          <button onClick={this.props.startOver}className='pure-button startover-btn'>Start over</button>
        </div>
      </div>
    );
  }
}

export default Menu;
