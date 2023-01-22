import livingNeighborsChecker from "./livingNeighborsChecker";

describe("Given the function livingNeighborsChecker", () => {
  describe("When it receives a cell matrix ", () => {
    test("Then it should modify each cell neighborsAlive property", () => {
      const initialCellMatrix = [
        [
          {
            alive: false,
            willBeAlive: false,
            neighborsAlive: 0,
          },
          {
            alive: true,
            willBeAlive: false,
            neighborsAlive: 0,
          },
          {
            alive: true,
            willBeAlive: false,
            neighborsAlive: 0,
          },
        ],
        [
          {
            alive: true,
            willBeAlive: false,
            neighborsAlive: 0,
          },
          {
            alive: true,
            willBeAlive: false,
            neighborsAlive: 0,
          },
          {
            alive: false,
            willBeAlive: false,
            neighborsAlive: 0,
          },
        ],
        [
          {
            alive: true,
            willBeAlive: false,
            neighborsAlive: 0,
          },
          {
            alive: true,
            willBeAlive: false,
            neighborsAlive: 0,
          },
          {
            alive: false,
            willBeAlive: false,
            neighborsAlive: 0,
          },
        ],
      ];

      const expectedResult = [
        [
          {
            alive: false,
            willBeAlive: true,
            neighborsAlive: 3,
          },
          {
            alive: true,
            willBeAlive: true,
            neighborsAlive: 3,
          },
          {
            alive: true,
            willBeAlive: true,
            neighborsAlive: 2,
          },
        ],
        [
          {
            alive: true,
            willBeAlive: false,
            neighborsAlive: 4,
          },
          {
            alive: true,
            willBeAlive: false,
            neighborsAlive: 5,
          },
          {
            alive: false,
            willBeAlive: false,
            neighborsAlive: 4,
          },
        ],
        [
          {
            alive: true,
            willBeAlive: true,
            neighborsAlive: 3,
          },
          {
            alive: true,
            willBeAlive: true,
            neighborsAlive: 3,
          },
          {
            alive: false,
            willBeAlive: false,
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
