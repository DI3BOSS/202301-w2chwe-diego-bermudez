class Cell {
  alive;
  livingNeighbors;

  constructor(alive = false, livingNeighbors = 0) {
    this.alive = alive;
    this.livingNeighbors = livingNeighbors;
  }

  reap() {
    this.alive = false;
  }

  sow() {
    this.alive = true;
  }

  surround() {
    this.livingNeighbors++;
  }
}

export default Cell;
