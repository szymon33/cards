import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card value='blabla' />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('red card', () => {
  const card = new Card({ value: '♥Q'}); // queen of hearts

  it('has suit', () => {
    expect(card.suit).toBe('♥');
  });

  it('has rank', () => {
    expect(card.rank).toBe('Q');
  });

  it('has bgColur red', () => {
    expect(card.bgColour).toEqual('card--red');
  });
});
