import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './MenuItem';

it('renders without crashing', () => {
  const div = document.createElement('div'),
        data = {
          id: 1,
          name: 'La La Land',
          className: 'some-awsome-class',
          action: () => true,
          active: () => true
        }
  ReactDOM.render(<MenuItem data={data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
