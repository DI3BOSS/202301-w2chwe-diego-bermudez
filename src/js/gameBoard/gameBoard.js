class Cell {
  alive;
  willBeAlive;
  positionX;
  positionY;

  constructor(positionX, positionY, alive = false, willBeAlive = false) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.alive = alive;
    this.willBeAlive = willBeAlive;
  }

  disapear() {
    this.willBeAlive = false;
  }

  rise() {
    this.willBeAlive = true;
  }
}

const BoardSize = 10;
const gameBoard = {};
const randomRise = !(Math.random() < 0.5);

for (let positionX = 1; positionX <= BoardSize; positionX++) {
  for (let positionY = 1; positionY <= BoardSize; positionY++) {
    gameBoard[positionX + "," + positionY] = new Cell(
      positionX,
      positionY,
      randomRise
    );
  }
}

console.table(gameBoard);
