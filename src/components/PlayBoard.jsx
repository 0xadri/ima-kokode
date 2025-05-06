import { useState } from "react";

const PlayBoard = ({ showWinner }) => {
  const [boardValues, setBoardValues] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [playerTurn, setPlayerTurn] = useState("O");

  const switchPlayerTurn = () => {
    setPlayerTurn((playerTurn) => (playerTurn === "O" ? "X" : "O"));
  };

  const checkIfSymbolWins = (symbol, boardValues) => {
    // console.log(boardValues);
    // Horizontal
    if (
      boardValues[0][0] === symbol &&
      boardValues[0][1] === symbol &&
      boardValues[0][2] === symbol
    ) {
      return true;
      console.log("here");
    } else if (
      boardValues[1][0] === symbol &&
      boardValues[1][1] === symbol &&
      boardValues[1][2] === symbol
    ) {
      return true;
    } else if (
      boardValues[2][0] === symbol &&
      boardValues[2][1] === symbol &&
      boardValues[2][2] === symbol
    ) {
      return true;
    }
    // Vertical
    else if (
      boardValues[0][0] === symbol &&
      boardValues[1][0] === symbol &&
      boardValues[2][0] === symbol
    ) {
      return true;
    } else if (
      boardValues[0][1] === symbol &&
      boardValues[1][1] === symbol &&
      boardValues[2][1] === symbol
    ) {
      return true;
    } else if (
      boardValues[0][2] === symbol &&
      boardValues[1][2] === symbol &&
      boardValues[2][2] === symbol
    ) {
      return true;
    }
    // Diagonal
    else if (
      boardValues[0][0] === symbol &&
      boardValues[1][1] === symbol &&
      boardValues[2][2] === symbol
    ) {
      return true;
    } else if (
      boardValues[0][2] === symbol &&
      boardValues[1][1] === symbol &&
      boardValues[2][0] === symbol
    ) {
      return true;
    }
  };

  const checkIfOver = (boardValues) => {
    return checkIfSymbolWins(playerTurn, boardValues);
  };

  const handleClick = (e) => {
    const row = +e.target.getAttribute("row");
    const col = +e.target.getAttribute("col");
    const cellVal = boardValues[row][col];

    if (cellVal) {
      alert("Pick another cell. This one is already taken.");
      return;
    }

    const newBoard = boardValues.map((row) => [...row]);
    newBoard[row][col] = playerTurn;
    setBoardValues(() => newBoard);

    if (checkIfOver(newBoard)) {
      showWinner(playerTurn);
      return;
    }
    switchPlayerTurn();
  };

  return (
    <>
      <h2 className="mb-5">Turn Now: {playerTurn}</h2>
      <div className="board-row">
        <div className="board-cell">
          <span className="board-symbol">{boardValues[0][0]}</span>
          <div
            className="board-cell-click-catcher"
            onClick={handleClick}
            row="0"
            col="0"
          ></div>
        </div>
        <div className="board-cell">
          <span className="board-symbol">{boardValues[0][1]}</span>
          <div
            className="board-cell-click-catcher"
            onClick={handleClick}
            row="0"
            col="1"
          ></div>
        </div>
        <div className="board-cell">
          <span className="board-symbol">{boardValues[0][2]}</span>
          <div
            className="board-cell-click-catcher"
            onClick={handleClick}
            row="0"
            col="2"
          ></div>
        </div>
      </div>
      <div className="board-row">
        <div className="board-cell">
          <span className="board-symbol">{boardValues[1][0]}</span>
          <div
            className="board-cell-click-catcher"
            onClick={handleClick}
            row="1"
            col="0"
          ></div>
        </div>
        <div className="board-cell">
          <span className="board-symbol">{boardValues[1][1]}</span>
          <div
            className="board-cell-click-catcher"
            onClick={handleClick}
            row="1"
            col="1"
          ></div>
        </div>
        <div className="board-cell">
          <span className="board-symbol">{boardValues[1][2]}</span>
          <div
            className="board-cell-click-catcher"
            onClick={handleClick}
            row="1"
            col="2"
          ></div>
        </div>
      </div>
      <div className="board-row">
        <div className="board-cell">
          <span className="board-symbol">{boardValues[2][0]}</span>
          <div
            className="board-cell-click-catcher"
            onClick={handleClick}
            row="2"
            col="0"
          ></div>
        </div>
        <div className="board-cell">
          <span className="board-symbol">{boardValues[2][1]}</span>
          <div
            className="board-cell-click-catcher"
            onClick={handleClick}
            row="2"
            col="1"
          ></div>
        </div>
        <div className="board-cell">
          <span className="board-symbol">{boardValues[2][2]}</span>
          <div
            className="board-cell-click-catcher"
            onClick={handleClick}
            row="2"
            col="2"
          ></div>
        </div>
      </div>
    </>
  );
};

export default PlayBoard;
