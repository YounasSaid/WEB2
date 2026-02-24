// Game state - alt data om spillet samlet i ét objekt
let gameState = {
  player1: createPlayer("X", "Spiller 1"),
  player2: createPlayer("O", "Spiller 2"),
  board: createBoard(),
  currentPlayer: null,
  gameOver: false
};

// Sæt currentPlayer til player1 fra start
gameState.currentPlayer = gameState.player1;

// Starter spillet - sætter event listeners op og tegner brættet
function start() {
  setupEventListeners();
  updateDisplay(gameState);
}

// Tilføjer click listeners til alle celler og restart-knappen
function setupEventListeners() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(index));
  });

  const restartBtn = document.getElementById('restart');
  restartBtn.addEventListener('click', () => restart());
}

// Håndterer klik på en celle
function handleCellClick(index) {
  if (gameState.gameOver) return;

  const success = makeMove(gameState.board, index, gameState.currentPlayer.symbol);
  if (!success) return;

  updateDisplay(gameState);

  const winner = checkWinner(gameState.board);
  if (winner) {
    gameState.gameOver = true;
    document.getElementById('status').textContent = `${gameState.currentPlayer.name} vinder!`;
    return;
  }

  if (isDraw(gameState.board)) {
    gameState.gameOver = true;
    document.getElementById('status').textContent = 'Uafgjort!';
    return;
  }

  gameState.currentPlayer = switchPlayer(gameState);
  updateDisplay(gameState);
}

// Returnerer den anden spiller (FP-stil - returnerer ny værdi i stedet for at mutere)
function switchPlayer(state) {
  return state.currentPlayer === state.player1 ? state.player2 : state.player1;
}

// Opdaterer HTML med det aktuelle board og status
function updateDisplay(state) {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    cell.textContent = state.board.cells[index] || '';
  });

  if (!state.gameOver) {
    document.getElementById('status').textContent = `${state.currentPlayer.name}'s tur`;
  }
}

// Nulstiller hele spillet
function restart() {
  resetBoard(gameState.board);
  gameState.currentPlayer = gameState.player1;
  gameState.gameOver = false;
  updateDisplay(gameState);
  document.getElementById('status').textContent = 'Spillet er genstartet. Spiller 1 starter!';
}

// Start spillet når siden indlæses
document.addEventListener('DOMContentLoaded', () => {
  start();
});
