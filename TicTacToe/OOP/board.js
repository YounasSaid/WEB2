class Board {
    #cells = [null,null,null,null,null,null,null,null,null];
    #winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];

    constructor() {
    }

    makeMove(index, symbol) {
        if (this.#cells[index] === null) {
            this.#cells[index] = symbol;
            return true;
        }
        return false;
    }

    checkWinner(){
        for (let combination of this.#winningCombinations) {
            const [a, b, c] = combination;
            if (this.#cells[a] && this.#cells[a] === this.#cells[b] && this.#cells[a] === this.#cells[c]) {
                return this.#cells[a];
            }
        }
        return null;
    }

    isDraw() {
        return this.#cells.every(cell => cell !== null) && !this.checkWinner();
    }

    resetBoard() {
        this.#cells = [null,null,null,null,null,null,null,null,null];
    }

    getMoveAtIndex(index) {
        return this.#cells[index];
    }
}
