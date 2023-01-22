import gameBoardGenerator from "./gameBoardGenerator/gameBoardGenerator";
import grimReaperTimer from "./grimReaperTimer/grimReaperTimer";

export const gameBoardSize = 5;
export const gameBoard = [];

const delayToStart = 2000;
const gameUserScenario = document.getElementById("game-scenario");

const gameStart = (boardSize) => {
  setTimeout(() => {
    gameBoardGenerator(boardSize);

    for (let positionX = 0; positionX < boardSize; positionX++) {
      for (let positionY = 0; positionY < boardSize; positionY++) {
        gameUserScenario.innerHTML += `<div class="game-scenario__petri-grid-${
          positionX + "-" + positionY
        }}"></div>`;
      }
    }
  }, delayToStart);

  grimReaperTimer(gameBoard);
};

gameStart(gameBoardSize);
