# Tic-Tac-Toe - OOP & FP

En browser-baseret Tic-Tac-Toe implementation bygget som en del af WEB2 kurset på 4. semester. Opgaven demonstrerer forståelsen af to fundamentalt forskellige programmeringsparadigmer ved at implementere det samme spil to gange.

## Formål

Formålet med projektet er at vise forskellen mellem **objekt-orienteret programmering (OOP)** og **funktionel programmering (FP)** i JavaScript - og hvordan man kan løse det samme problem med to helt forskellige tilgange.

---

## Versioner

### OOP Version (`OOP/OOP.html`)
Implementeret med klasser og objekter:
- **`Player`** - klasse med private felter (`#symbol`, `#name`, `#myTurn`) og getter-metoder
- **`Board`** - klasse der håndterer brættets tilstand og regler (`makeMove`, `checkWinner`, `isDraw`, `resetBoard`)
- **`Game`** - controller-klasse der kobler Player og Board sammen og håndterer HTML-interaktion

Nøgleprincip: State ejes af objekterne og muteres direkte via metoder (`this.#cells[index] = symbol`)

### FP Version (`FP/fp.html`)
Implementeret med rene funktioner og et centralt state-objekt:
- **`createPlayer()`** - returnerer et player-objekt
- **`createBoard()`** - returnerer et board-objekt
- **`makeMove(board, index, symbol)`** - funktioner modtager state som parameter
- **`checkWinner(board)`** - pure function der ikke ændrer state
- **`gameState`** - centralt objekt der holder hele spillets tilstand

Nøgleprincip: Funktioner modtager state som parameter i stedet for at eje den

---

## Teknologier

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Ingen eksterne biblioteker

---



## Hvad jeg har lært

- Forskellen på OOP og FP i praksis
- Klasser og private felter i JavaScript (`#`)
- Event listeners og DOM-manipulation
- Pure functions og immutability
- Hvordan man planlægger et projekt med UML før man koder
