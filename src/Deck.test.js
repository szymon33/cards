import React from 'react';
import ReactDOM from 'react-dom';
import Deck from './Deck';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render("<Deck deckIsOrdered= { true } noOfCards={ 52 } />", div);
  ReactDOM.unmountComponentAtNode(div);
});

it("sets the message 'Deck is ordered.'", () => {
  const deck = new Deck({ deckIsOrdered: true });
  expect(deck.shuffledInfo()).toEqual( "Deck is ordered.");
});

it("sets the message 'Deck is shuffled.'", () => {
  const deck = new Deck({ deckIsOrdered: false });
  expect(deck.shuffledInfo()).toEqual( "Deck is shuffled.");
});
