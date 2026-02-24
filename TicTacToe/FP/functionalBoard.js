// Opretter et nyt board med 9 tomme celler
function createBoard() {
  return {
    cells: [null, null, null, null, null, null, null, null, null]
  };
}

// Forsøger at sætte et symbol på en position
// Returnerer true hvis det lykkedes, false hvis cellen var optaget
function makeMove(board, index, symbol) {
  if (board.cells[index] !== null) return false;
  board.cells[index] = symbol;
  return true;
}

// Checker alle 8 win-kombinationer
// Returnerer "X", "O" eller null
function checkWinner(board) {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const [a, b, c] of winningCombinations) {
    if (board.cells[a] && board.cells[a] === board.cells[b] && board.cells[a] === board.cells[c]) {
      return board.cells[a];
    }
  }
  return null;
}

// Checker om brættet er fuldt og der ingen vinder er
function isDraw(board) {
  return board.cells.every(cell => cell !== null) && !checkWinner(board);
}

// Nulstiller alle celler til null
function resetBoard(board) {
  board.cells = [null, null, null, null, null, null, null, null, null];
}
