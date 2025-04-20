import { useState } from "react";

const PlayBoard = () => {
  const [boardValues, setBoardValues] = useState([
    ["X", "O", ""],
    ["", "O", ""],
    ["", "", ""],
  ]);
  const handleClick = (e) => {
    const row = +e.target.getAttribute("row");
    const col = +e.target.getAttribute("col");
    const cellVal = boardValues[row][col];
    if (cellVal) {
      alert("Pick another cell. This one is already taken.");
      return;
    }
    const newBoard = boardValues.map((row) => [...row]);
    newBoard[row][col] = "X";
    setBoardValues(newBoard);
  };
  return (
    <>
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
