const livingNeighborsChecker = (gameBoard) => {
  const boardSize = gameBoard.length;
  for (let positionX = 0; positionX < boardSize; positionX++) {
    for (let positionY = 0; positionY < boardSize; positionY++) {
      gameBoard[positionX][positionY].livingNeighbors = 0;

      if (typeof gameBoard[positionX - 1] !== "undefined") {
        if (gameBoard[positionX - 1][positionY - 1]?.alive) {
          gameBoard[positionX][positionY].surround();
        }

        if (gameBoard[positionX - 1][positionY + 1]?.alive) {
          gameBoard[positionX][positionY].surround();
        }

        if (gameBoard[positionX - 1][positionY]?.alive) {
          gameBoard[positionX][positionY].surround();
        }
      }

      if (typeof gameBoard[positionX + 1] !== "undefined") {
        if (gameBoard[positionX + 1][positionY]?.alive) {
          gameBoard[positionX][positionY].surround();
        }

        if (gameBoard[positionX + 1][positionY + 1]?.alive) {
          gameBoard[positionX][positionY].surround();
        }

        if (gameBoard[positionX + 1][positionY - 1]?.alive) {
          gameBoard[positionX][positionY].surround();
        }
      }

      if (gameBoard[positionX][positionY + 1]?.alive) {
        gameBoard[positionX][positionY].surround();
      }

      if (gameBoard[positionX][positionY - 1]?.alive) {
        gameBoard[positionX][positionY].surround();
      }

      if (gameBoard[positionX][positionY].alive === false) {
        if (gameBoard[positionX][positionY].livingNeighbors === 3) {
          gameBoard[positionX][positionY].sow();
        } else {
          gameBoard[positionX][positionY].reap();
        }
      }

      if (gameBoard[positionX][positionY].alive === true) {
        if (
          gameBoard[positionX][positionY].livingNeighbors === 2 ||
          gameBoard[positionX][positionY].livingNeighbors === 3
        ) {
          gameBoard[positionX][positionY].sow();
        } else {
          gameBoard[positionX][positionY].reap();
        }
      }
    }
  }

  return gameBoard;
};

export default livingNeighborsChecker;
