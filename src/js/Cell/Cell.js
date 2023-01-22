class Cell {
  alive;
  willBeAlive;
  neighborsAlive;

  constructor(alive = false, willBeAlive = false, neighborsAlive = 0) {
    this.alive = alive;
    this.willBeAlive = willBeAlive;
    this.neighborsAlive = neighborsAlive;
  }

  disapear() {
    this.willBeAlive = false;
  }

  rise() {
    this.willBeAlive = true;
  }
}

export default Cell;
