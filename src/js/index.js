import gameBoardGenerator from "./gameBoardGenerator/gameBoardGenerator";
import livingNeighborsChecker from "./livingNeighborsChecker/livingNeighborsChecker";

export const gameBoardSize = 75;
export const gameBoard = [];
const delayToReap = 1200;

const firstGeneration = gameBoardGenerator(gameBoardSize, gameBoard);

const gameStart = (boardSize, gameBoard) => {
  const gameUserScenario = document.querySelector(".game-scenario");
  gameUserScenario.innerHTML = "";

  for (let positionX = 0; positionX < boardSize; positionX++) {
    const cellsRowContainer = document.createElement("div");
    cellsRowContainer.className = "game-scenario__petri-dish";
    gameUserScenario.appendChild(cellsRowContainer);

    for (let positionY = 0; positionY < boardSize; positionY++) {
      const cellContainer = document.createElement("div");
      cellsRowContainer.appendChild(cellContainer);
      if (gameBoard[positionX][positionY]?.alive) {
        cellContainer.setAttribute(
          "class",
          "game-scenario__petri-cell game-scenario__petri-cell--alive"
        );
      } else {
        cellContainer.setAttribute("class", "game-scenario__petri-cell");
      }
    }
  }
};

const grimReaperTimer = () => {
  let nextGeneration = [];
  const currentGeneration =
    nextGeneration.length > 0
      ? nextGeneration
      : livingNeighborsChecker(firstGeneration);

  gameStart(gameBoardSize, currentGeneration);
  nextGeneration = livingNeighborsChecker(currentGeneration);
  setTimeout(grimReaperTimer, delayToReap);
};

grimReaperTimer();
