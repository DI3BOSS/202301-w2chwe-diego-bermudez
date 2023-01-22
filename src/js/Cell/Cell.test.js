import Cell from "./Cell";

describe("Given the class Cell", () => {
  describe("When it instantiates an object with 'true' as value for 'alive' property", () => {
    test("Then it should return 'true' as value of cell.alive", () => {
      const cellAlive = true;

      const testCellAlive = new Cell(cellAlive).alive;

      expect(testCellAlive).toBe(cellAlive);
    });
  });
});
