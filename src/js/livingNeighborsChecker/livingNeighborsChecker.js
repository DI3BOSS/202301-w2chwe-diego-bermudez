import { GameBoardSize } from "..";
import { gameBoard } from "..";

const livingNeighborsChecker = (boardSize) => {
  for (let positionX = 0; positionX < boardSize; positionX++) {
    for (let positionY = 0; positionY < boardSize; positionY++) {
      gameBoard[positionX][positionY].neighborsAlive = 0;
    }
  }
};

livingNeighborsChecker(GameBoardSize);
