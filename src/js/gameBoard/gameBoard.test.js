import { gameBoardGenerator } from "./gameBoard";

describe("Given the function gameBoardGenerator", () => {
  describe("When it receives a boardSize of '5'", () => {
    test("Then it should return a matrix of 5 rows", () => {
      const boardSize = 5;

      const expectedResult = 5;

      const testGameBoardGenerator = gameBoardGenerator(boardSize).length;

      expect(testGameBoardGenerator).toBe(expectedResult);
    });
  });

  describe("When it receives a boardSize of '5'", () => {
    test("Then it should return a matrix of 5 colums", () => {
      const boardSize = 5;

      const expectedResult = 5;

      const testGameBoardGenerator = gameBoardGenerator(boardSize)[0].length;

      expect(testGameBoardGenerator).toBe(expectedResult);
    });
  });
});
