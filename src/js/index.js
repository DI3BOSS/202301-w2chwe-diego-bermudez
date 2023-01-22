import gameBoardGenerator from "./gameBoardGenerator/gameBoardGenerator";

export const gameBoardSize = 5;
export const gameBoard = [];

// Const delayToStart = 2000;

const gameStart = (boardSize, gameBoard) => {
  const firstGeneration = gameBoardGenerator(boardSize, gameBoard);
  const gameUserScenario = document.querySelector(".game-scenario");
  gameUserScenario.innerHTML = "";

  for (let positionX = 0; positionX < boardSize; positionX++) {
    const cellsRowContainer = document.createElement("div");
    cellsRowContainer.className = "petri-dish";
    gameUserScenario.appendChild(cellsRowContainer);

    for (let positionY = 0; positionY < boardSize; positionY++) {
      const cellContainer = document.createElement("div");
      cellsRowContainer.appendChild(cellContainer);
      if (firstGeneration[positionX][positionY]?.alive) {
        cellContainer.setAttribute("class", "petri-cell petri-cell--alive");
      } else {
        cellContainer.setAttribute("class", "petri-cell");
      }
    }
  }
};

gameStart(gameBoardSize, gameBoard);
