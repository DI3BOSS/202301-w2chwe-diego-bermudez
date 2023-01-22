import livingNeighborsChecker from "./livingNeighborsChecker";

describe("Given the function livingNeighborsChecker", () => {
  describe("When it receives a cell matrix ", () => {
    test("Then it should modify each cell neighborsAlive property", () => {
      const initialCellMatrix = [
        [
          {
            alive: false,
            neighborsAlive: 0,
          },
          {
            alive: true,
            neighborsAlive: 0,
          },
          {
            alive: true,
            neighborsAlive: 0,
          },
        ],
        [
          {
            alive: true,
            neighborsAlive: 0,
          },
          {
            alive: true,
            neighborsAlive: 0,
          },
          {
            alive: false,
            neighborsAlive: 0,
          },
        ],
        [
          {
            alive: true,
            neighborsAlive: 0,
          },
          {
            alive: true,
            neighborsAlive: 0,
          },
          {
            alive: false,
            neighborsAlive: 0,
          },
        ],
      ];

      const expectedResult = [
        [
          {
            alive: false,
            neighborsAlive: 3,
          },
          {
            alive: true,
            neighborsAlive: 3,
          },
          {
            alive: true,
            neighborsAlive: 2,
          },
        ],
        [
          {
            alive: true,
            neighborsAlive: 4,
          },
          {
            alive: true,
            neighborsAlive: 5,
          },
          {
            alive: false,
            neighborsAlive: 4,
          },
        ],
        [
          {
            alive: true,
            neighborsAlive: 3,
          },
          {
            alive: true,
            neighborsAlive: 3,
          },
          {
            alive: false,
            neighborsAlive: 2,
          },
        ],
      ];

      const testLivingNeighborsChecker =
        livingNeighborsChecker(initialCellMatrix);

      expect(testLivingNeighborsChecker).toEqual(expectedResult);
    });
  });
});
