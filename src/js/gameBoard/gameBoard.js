import Cell from "../Cell/Cell";

const boardSize = 5;

const gameBoard = [];

const randomRise = () => !(Math.random() < 0.5);

const axisZeroPosition = 0;

for (let positionX = axisZeroPosition; positionX < boardSize; positionX++) {
  gameBoard.push([]);

  for (let positionY = axisZeroPosition; positionY < boardSize; positionY++) {
    gameBoard[positionX][positionY] = new Cell(randomRise());
  }
}

export default gameBoard;
