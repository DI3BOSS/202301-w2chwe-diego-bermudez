import Cell from "../Cell/Cell";

const gameBoardGenerator = (boardSize, gameBoard) => {
  const axisZeroPosition = 0;

  const randomRise = () => !(Math.random() < 0.5);

  for (let positionX = axisZeroPosition; positionX < boardSize; positionX++) {
    gameBoard.push([]);

    for (let positionY = axisZeroPosition; positionY < boardSize; positionY++) {
      gameBoard[positionX][positionY] = new Cell(randomRise());
    }
  }

  return gameBoard;
};

export default gameBoardGenerator;
