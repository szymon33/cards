import React, { Component } from 'react';

class MenuItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.data.action}
              className={'pure-button ' + this.props.data.className}
              disabled={!this.props.data.active()}>
                {this.props.data.name}
      </button>
    );
  }
}

export default MenuItem;
