const livingNeighborsChecker = (gameBoard) => {
  const boardSize = gameBoard.length;
  for (let positionX = 0; positionX < boardSize; positionX++) {
    for (let positionY = 0; positionY < boardSize; positionY++) {
      gameBoard[positionX][positionY].neighborsAlive = 0;

      if (typeof gameBoard[positionX - 1] !== "undefined") {
        if (gameBoard[positionX - 1][positionY - 1]?.alive) {
          gameBoard[positionX][positionY].neighborsAlive++;
        }

        if (gameBoard[positionX - 1][positionY + 1]?.alive) {
          gameBoard[positionX][positionY].neighborsAlive++;
        }

        if (gameBoard[positionX - 1][positionY]?.alive) {
          gameBoard[positionX][positionY].neighborsAlive++;
        }
      }

      if (typeof gameBoard[positionX + 1] !== "undefined") {
        if (gameBoard[positionX + 1][positionY]?.alive) {
          gameBoard[positionX][positionY].neighborsAlive++;
        }

        if (gameBoard[positionX + 1][positionY + 1]?.alive) {
          gameBoard[positionX][positionY].neighborsAlive++;
        }

        if (gameBoard[positionX + 1][positionY - 1]?.alive) {
          gameBoard[positionX][positionY].neighborsAlive++;
        }
      }

      if (gameBoard[positionX][positionY + 1]?.alive) {
        gameBoard[positionX][positionY].neighborsAlive++;
      }

      if (gameBoard[positionX][positionY - 1]?.alive) {
        gameBoard[positionX][positionY].neighborsAlive++;
      }

      if (gameBoard[positionX][positionY].alive === false) {
        if (gameBoard[positionX][positionY].neighborsAlive === 3) {
          gameBoard[positionX][positionY].willBeAlive = true;
        } else {
          gameBoard[positionX][positionY].willBeAlive = false;
        }
      }

      if (gameBoard[positionX][positionY].alive === true) {
        if (
          gameBoard[positionX][positionY].neighborsAlive === 2 ||
          gameBoard[positionX][positionY].neighborsAlive === 3
        ) {
          gameBoard[positionX][positionY].willBeAlive = true;
        } else {
          gameBoard[positionX][positionY].willBeAlive = false;
        }
      }
    }
  }

  return gameBoard;
};

export default livingNeighborsChecker;
