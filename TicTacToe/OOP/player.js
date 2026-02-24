class Player {
  #symbol;
  #name;
  #myTurn;

  constructor(symbol, name) {
    this.#symbol = symbol;
    this.#name = name;
    this.#myTurn = false;
  }

  // Hvis du skal læse værdien udefra:
  getSymbol() {
    return this.#symbol;
  }
  getName(){
    return this.#name;
  }

  setTurn(value) {
    this.#myTurn = value;
  }

  isTurn() {
    return this.#myTurn;
  }
}