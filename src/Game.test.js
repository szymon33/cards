import Game from './Game';

describe('Game', () => {
  let game = new Game();

  beforeEach(() => {
     game = new Game();
  });

  it('has table array', () => {
    const table = game.table;
    expect(table).toBeInstanceOf(Array);
    expect(table).toHaveLength(0);
  });

  describe('_buildDeck', () => {
    const deck = game._buildDeck();

    it('is array', () => {
      expect(deck).toBeInstanceOf(Array);
    });

    it('has length 52', () => {
      expect(deck.length).toEqual(52);
    });

    it('has 2nd of club as first', () => {
      expect(deck[0]).toBe('♠2');
    });

    it('has Ace of dimond as last', () => {
      expect(deck[51]).toBe('♦A');
    });
  });

  describe('takeOneCard', () => {
    it('returns last card', () => {
      expect(game.takeOneCard()).toEqual('♦A');
    });

    it('decreases the deck', () => {
      const deckInitialSize = game.deck.length;
      game.takeOneCard();
      expect(game.deck.length).toEqual(deckInitialSize - 1);
    });

    it('increases the table', () => {
      const tableInitialSize = game.table.length;
      game.takeOneCard();
      expect(game.table.length).toEqual(tableInitialSize + 1);
    });

    it('the card on the table is not in the deck', () => {
      const card = game.takeOneCard();
      expect(game.table).toContain(card);
      expect(game.deck).not.toContain(card);
    });

    it('returns null when deck is already empty', () => {
      game.deck = [];
      expect(game.takeOneCard()).toBeNull();
    });
  });

  describe('giveCardBack', () => {
    it('returns last card', () => {
      const card = game.takeOneCard();
      expect(game.giveCardBack(card)).toEqual('♦A');
    });

    it('increases the deck', () => {
      const card = game.takeOneCard(),
            deckInitialSize = game.deck.length;
      game.giveCardBack(card);
      expect(game.deck.length).toEqual(deckInitialSize + 1);
    });

    it('decreases the table', () => {
      const card = game.takeOneCard(),
            tableInitialSize = game.table.length;
      game.giveCardBack(card);
      expect(game.table.length).toEqual(tableInitialSize - 1);
    });

    it('the card is no longer in the table', () => {
      const card = game.takeOneCard();

      expect(game.table).toContain(card);
      expect(game.deck).not.toContain(card);
      game.giveCardBack(card);
      expect(game.deck).toContain(card);
      expect(game.table).not.toContain(card);
    });

    it('returns null when table is already empty', () => {
      game.table = [];
      expect(game.giveCardBack('La La Land')).toBeNull();
    });

    it('does not take not existing card from the table', () => {
      game.takeOneCard();
      const initTable = game.table;
      game.giveCardBack('La La Land');
      expect(game.table).toBe(initTable);
    });
  });

  describe('shuffle', () => {
    it('returns different deck', () => {
      expect(game.deck).toEqual(game.orderedDeck);
      game.shuffle();
      expect(game.deck).not.toEqual(game.orderedDeck);
    });

    it('returns null when deck is empty', () => {
      game.deck = [];
      expect(game.shuffle()).toBeNull();
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

  describe('sortTable', () => {
    it('sorts', () => {
      game.shuffle();

      expect(game.table).toEqual([]);
      [1, 2 ,3, 4].forEach(() => { game.takeOneCard(); });

      const tableDup = game.table.slice();

      game.sortTable();

      expect(game.table).not.toEqual(tableDup);
    });

    it('returns empty array when table is empty', () => {
      game.table = [];
      expect(game.sortTable()).toEqual([]);
    });
  });


  it('deckIsOrdered', () => {
    expect(game.deckIsOrdered).toBeTruthy;
    game.shuffle();
    expect(game.deckIsOrdered).toBeFalsey;
  });
});
