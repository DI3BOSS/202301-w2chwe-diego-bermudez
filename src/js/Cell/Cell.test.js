import Cell from "./Cell";

describe("Given the class Cell", () => {
  describe("When it instantiates an object with '4, 6' as values for axis X and axis Y", () => {
    test("Then it should return '4' as value of cell.positionX", () => {
      const positionX = 4;
      const positionY = 6;
      const expectedResult = 4;

      const testCellPositionX = new Cell(positionX, positionY).positionX;

      expect(testCellPositionX).toBe(expectedResult);
    });
  });

  describe("When it instantiates an object with '4, 6' as values for axis X and axis Y", () => {
    test("Then it should return '6' as value of cell.positionY", () => {
      const positionX = 4;
      const positionY = 6;
      const expectedResult = 6;

      const testCellPositionY = new Cell(positionX, positionY).positionY;

      expect(testCellPositionY).toBe(expectedResult);
    });
  });

  describe("When it instantiates an object with '4, 6, true' as values", () => {
    test("Then it should return 'true' as value of cell.alive", () => {
      const positionX = 4;
      const positionY = 6;
      const cellIsAlive = true;
      const expectedResult = true;

      const testCellAlive = new Cell(positionX, positionY, cellIsAlive).alive;

      expect(testCellAlive).toBe(expectedResult);
    });
  });
});
