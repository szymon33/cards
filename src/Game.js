class Game {
  constructor() {
    this.orderedDeck = this._buildDeck();
    this.startOver();
  }

  takeOneCard() {
    if (this.deck.length === 0) return null;

    let card = this.deck.pop(1);
    this.table.push(card);
    return card;
  }

  giveCardBack(card) {
    if (this.table.length === 0) return null;

    let index = this.table.indexOf(card);
    if (index > -1) {
      this.table.splice(index, 1);
      this.deck.push(card);
    }

    return card;
  }

  shuffle() {
    if (this.deck.length === 0) { return null };

    let ctr = this.deck.length, temp, randomIdx;

    while (ctr > 0) {
      randomIdx = Math.floor(Math.random() * ctr);

      ctr--;

      temp = this.deck[ctr];
      this.deck[ctr] = this.deck[randomIdx];
      this.deck[randomIdx] = temp;
    }
    this.deckIsOrdered = false;
    return this.deck;
  }

  startOver() {
    this.table = [];
    this.deck = Array.from(this.orderedDeck);
    this.deckIsOrdered = true;
    return this;
  }

  sortTable() {
    let tableDup = Array.from(this.table);
    if (tableDup.length === 0) return this.table;

    tableDup.sort( (a, b) => {  
      return this.orderedDeck.indexOf(a) - this.orderedDeck.indexOf(b);
    });
    this.table = tableDup;
    return this.table;
  }

  // private

  _buildDeck() {
    let result = [],
        ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
        suits = ['C', 'S', 'H', 'D']; // clubs, spades, hearts, diamonds

    suits.forEach(function(suit) {
      ranks.forEach(function(rank){
        result.push(suit.concat(rank));       
      });
    });
    return result;
  }
}

export default Game;
