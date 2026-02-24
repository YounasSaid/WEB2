class Game {
  #player1;
  #player2;
  #board;
  #currentPlayer;
  #gameOver;

  constructor() {
    this.#player1 = new Player("X", "Spiller 1");
    this.#player2 = new Player("O", "Spiller 2");
    this.#board = new Board();
    this.#currentPlayer = this.#player1;
    this.#gameOver = false;
  }

  start() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
      cell.addEventListener('click', () => this.handleCellClick(index));
    });

    const restartBtn = document.getElementById('restart');
    restartBtn.addEventListener('click', () => this.restart());

    this.updateDisplay();
  }

  updateDisplay() {
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell, index) => {
      const symbol = this.#board.getMoveAtIndex(index);
      cell.textContent = symbol || '';
    });

    document.getElementById('status').textContent =
      `${this.#currentPlayer.getName()}'s tur`;
  }

  handleCellClick(index) {
    if (this.#gameOver) return;

    const success = this.#board.makeMove(index, this.#currentPlayer.getSymbol());
    if (!success) return;

    this.updateDisplay();

    const winner = this.#board.checkWinner();
    if (winner) {
      this.#gameOver = true;
      document.getElementById('status').textContent = `${this.#currentPlayer.getName()} vinder!`;
      return;
    }

    if (this.#board.isDraw()) {
      this.#gameOver = true;
      document.getElementById('status').textContent = 'Uafgjort!';
      return;
    }

    this.switchPlayer();
    this.updateDisplay();
  }

  switchPlayer() {
  if (this.#currentPlayer === this.#player1) {
    this.#currentPlayer = this.#player2;
  } else {
    this.#currentPlayer = this.#player1;
  }
}

  restart() {
    this.#board.resetBoard();
    this.#currentPlayer = this.#player1;
    this.#gameOver = false;
    this.updateDisplay();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
  game.start();
});
