// Create a memory game where the computer plays with itself. The number of players is random (2-4).
// Each player takes a turn in revealing board elements, trying to find a pair. Typical memory game.
// Let's make an assumption that players have a perfect memory but they only remember elements revealed by themself.

//we have a random shuffled memory board
//we create a class that builds our comp player, 2-4 of them
//they should have an Id like Player_1, Player_2 etc
//they have a prop that says which bit they revealed and remember
//point count for pairs that were found
//

//regarding board
//should change pairs back to 0 or X so points wont double
//once there are no spots left, stop the game and run function that will tell who won with how many points
//
import Actions from "./MemoBoard.js";
class Player {
  constructor(Id, memory) {
    this.Id = Id;
    this.pairsFound = 0;
    this.playerMemory = memory;
  }
}
class MemoryGame {
  constructor(Xdim, Ydim, playersNum) {
    this.board = [];
    this.players = [];
    this.currentPlayerTurnIndex = 0;
    this.pairsFound = 0;
    this.playersNum = playersNum;
    this.Xdim = Xdim;
    this.Ydim = Ydim;
    this.size = Xdim * Ydim;
  }
  createGame() {
    this.createBoard();
    this.createPlayers();
  }
  createPlayers() {
    for (let i = 0; i < this.playersNum; i++) {
      const playerMemory = JSON.parse(JSON.stringify(this.board));
      this.players.push(new Player(`player_${i + 1}`, playerMemory));
    }
  }
  createBoard() {
    this.board = Actions.CreateMemoryBoard(this.Xdim, this.Ydim);
  }
  playerTurn() {
    const currentPlayer = this.players[this.currentPlayerTurnIndex];
    let pickedTile = this.revealRandomTile(currentPlayer);
    if (this.matchCheck(pickedTile, currentPlayer)) {
      this.updateBoardifMatch(pickedTile); //update boards
      this.updatePlayersMemoryifMatch(pickedTile);
    } else {
      pickedTile = this.revealRandomTile(currentPlayer);
      if (this.matchCheck(pickedTile, currentPlayer)) {
        this.updateBoardifMatch(pickedTile); //update boards
        this.updatePlayersMemoryifMatch(pickedTile);
      }
    }
    this.nextPlayer();
    if (this.isGameOver()) {
      this.players.sort((a, b) => b.pairsFound - a.pairsFound);
      console.log(
        `player ${this.players[0].Id} won with ${this.players[0].pairsFound} points!`
      );
    } else {
      return this.playerTurn();
    }
  }
  nextPlayer() {
    if (this.players.length - 1 === this.currentPlayerTurnIndex) {
      this.currentPlayerTurnIndex = 0;
    } else {
      this.currentPlayerTurnIndex++;
    }
  }
  isGameOver() {
    return this.pairsFound === this.size / 2;
  }
  revealRandomTile() {
    const currentPlayer = this.players[this.currentPlayerTurnIndex];
    let randomIndex = Actions.pickRandomNum(0, this.size);
    if (currentPlayer.playerMemory[randomIndex].isRevealed) {
      return this.revealRandomTile();
    } else {
      currentPlayer.playerMemory[randomIndex].isRevealed = true;
      return currentPlayer.playerMemory[randomIndex];
    }
  }
  matchCheck(pickedTile, currentPlayer) {
    const isMatch = currentPlayer.playerMemory.find((tile) => {
      tile.symbol === pickedTile.symbol && tile.isRevealed === true;
    });

    if (isMatch) {
      console.log(
        `Player ${currentPlayer.Id} found a pair of: ${pickedTile.symbol}s!`
      );
      currentPlayer.pairsFound++;
      return true;
    } else {
      console.log(`player ${currentPlayer.Id} found no matches!`);
      return false;
    }
  }
  updateBoardifMatch(pickedMatchingTile) {
    this.board = this.board.map((tile) => {
      if (tile.symbol === pickedMatchingTile.symbol) {
        return { ...tile, isRevealed: true };
      } else {
        return tile;
      }
    });
    this.pairsFound++;
  }
  updatePlayersMemoryifMatch(pickedMatchingTile) {
    for (let i = 0; i < this.playersNum - 1; i++) {
      this.players[i].playerMemory = this.players[i].playerMemory.map(
        (tile) => {
          if (tile.symbol === pickedMatchingTile.symbol) {
            return { ...tile, isRevealed: true };
          } else {
            return tile;
          }
        }
      );
      this.players[i].pairsFound++;
    }
  }
}

const newGame = new MemoryGame(4, 5, 2);
newGame.createGame();
console.log(newGame.board);
console.log(newGame.players);
// newGame.updateBoardifMatch(newGame.board[0]);
// newGame.updatePlayersMemoryifMatch(newGame.board[0]);
newGame.playerTurn();
console.log(newGame.board);
console.log(newGame.players);
// // console.log(newGame.revealRandomTile())
console.log("a");
