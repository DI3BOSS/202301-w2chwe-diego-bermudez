import livingNeighborsChecker from "../livingNeighborsChecker/livingNeighborsChecker";

const grimReaperTimer = (gameBoard) => {
  setTimeout(livingNeighborsChecker(gameBoard), 1000);
};

export default grimReaperTimer;
