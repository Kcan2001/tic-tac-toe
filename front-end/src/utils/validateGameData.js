import { winningConditions } from "../constants/winningCombos";

export const handleValidation = (board) => {
  if (!board) return null;
  const flattenBoard = board.flat();

  const ourMoves = flattenBoard
    .map((item, index) => {
      if (item === "X") return index;
      return null;
    })
    .filter((i) => i !== null);

  const AIMoves = flattenBoard
    .map((item, index) => {
      if (item === "O") return index;
      return null;
    })
    .filter((i) => i !== null);

  const weWon = winningConditions.filter((item) => {
    return item.every((w) => {
      return ourMoves.includes(w);
    });
  });

  const weLost = winningConditions.filter((item) => {
    return item.every((w) => {
      return AIMoves.includes(w);
    });
  });

  debugger;
  if (weWon && weWon.length > 0) {
    return "You Win!";
  }
  if (weLost && weLost.length > 0) {
    return "You Lost!";
  }

  if (ourMoves.length === 4 && AIMoves.length === 4) {
    return "You Tied!";
  }

  return null;
};
