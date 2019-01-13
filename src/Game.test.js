import Game from './Game';

describe('Game', () => {
  let game = new Game();

  beforeEach(() => {
     game = new Game();
  });

  it('has table array', () => {
    let table = game.table;
    expect(table).toBeInstanceOf(Array);
    expect(table).toHaveLength(0);
  });

  describe('_buildDeck', () => {
    let deck = game._buildDeck();

    it('is array', () => {
      expect(deck).toBeInstanceOf(Array);
    });

    it('has length 52', () => {
      expect(deck.length).toEqual(52);
    });

    it('has 2nd of club as first', () => {
      expect(deck[0]).toBe('C2');
    });

    it('has Ace of dimond as last', () => {
      expect(deck[51]).toBe('DA');
    });
  });

  describe('takeOneCard', () => {
    it('returns last card', () => {
      expect(game.takeOneCard()).toEqual('DA');
    });

    it('decreases the deck', () => {
      let deckInitialSize = game.deck.length;
      game.takeOneCard();
      expect(game.deck.length).toEqual(deckInitialSize - 1);
    });

    it('increases the table', () => {
      let tableInitialSize = game.table.length;
      game.takeOneCard();
      expect(game.table.length).toEqual(tableInitialSize + 1);
    });

    it('the card on the table is not in the deck', () => {
      let card = game.takeOneCard();
      expect(game.table).toContain(card);
      expect(game.deck).not.toContain(card);
    });

    it('returns null when deck is already empty', () => {
      expect(game.takeOneCard).toBeNull;
    });
  });

  describe('giveCardBack', () => {
    it('returns last card', () => {
      game.takeOneCard();
      expect(game.giveCardBack()).toEqual('DA');
    });

    it('increases the deck', () => {
      game.takeOneCard();
      let deckInitialSize = game.deck.length;
      game.giveCardBack();
      expect(game.deck.length).toEqual(deckInitialSize + 1);
    });

    it('decreases the table', () => {
      game.takeOneCard();
      let tableInitialSize = game.table.length;
      game.giveCardBack();
      expect(game.table.length).toEqual(tableInitialSize - 1);
    });

    it('the card is no longer in the table', () => {
      let card = game.takeOneCard();

      expect(game.table).toContain(card);
      expect(game.deck).not.toContain(card);
      game.giveCardBack();
      expect(game.deck).toContain(card);
      expect(game.table).not.toContain(card);
    });

    it('returns null when deck is already empty', () => {
      expect(game.takeOneCard).toBeNull;
    });
  });

  describe('shuffle', () => {
    it('returns different deck', () => {
      expect(game.deck).toEqual(game.orderedDeck);
      game.shuffle();
      expect(game.deck).not.toEqual(game.orderedDeck);
    });
  });

  describe('startOver', () => {
    it('clears the table', () => {
      game.takeOneCard();
      expect(game.table).not.toEqual([]);
      game.startOver();
      expect(game.table).toEqual([]);
    });

    it('gets back sorted deck', () => {
      expect(game.deck).toEqual(game.orderedDeck);
      game.shuffle();
      expect(game.deck).not.toEqual(game.orderedDeck);
    });
  });

  it('sortTable', () => {
    game.shuffle();
    expect(game.table).toEqual([]);
    [1, 2 ,3].forEach(() => { game.takeOneCard(); });
    let table = game.table;
    expect(table).not.toEqual([]);
    expect(table.length).toEqual(3);
    game.sortTable();
    expect(table.length).toEqual(3);
    expect(table).not.toEqual(game.table);
  });

  it('deckIsOrdered', () => {
    expect(game.deckIsOrdered).toBeTruthy;
    game.shuffle();
    expect(game.deckIsOrdered).toBeFalsey;
  });
});
