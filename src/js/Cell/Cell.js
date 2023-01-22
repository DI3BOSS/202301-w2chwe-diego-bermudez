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

  slay() {
    this.willBeAlive = false;
  }

  rise() {
    this.willBeAlive = true;
  }
}

export default Cell;
