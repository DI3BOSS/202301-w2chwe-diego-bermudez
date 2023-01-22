import livingNeighborsChecker from "../livingNeighborsChecker/livingNeighborsChecker";
import { gameBoard } from "..";

const grimReaperTimer = () => {
  setTimeout(livingNeighborsChecker(gameBoard), 1000);
};

export default grimReaperTimer;
