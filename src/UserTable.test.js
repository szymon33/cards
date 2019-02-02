import React from 'react';
import ReactDOM from 'react-dom';
import UserTable from './UserTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserTable cards={ [] } giveCardBack={ () => {} } />, div);
  ReactDOM.unmountComponentAtNode(div);
});
