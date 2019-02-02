import React from 'react';
import ReactDOM from 'react-dom';
import Deck from './Deck';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render("<Deck deckIsOrdered= { true } noOfCards={ 52 } />", div);
  ReactDOM.unmountComponentAtNode(div);
});
