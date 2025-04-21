import { useState } from "react";
import PlayBoard from "../components/PlayBoard";
import PlayerSettings from "../components/PlayerSettings";

const TicTacToe = () => {
  const [namePlayer1, setNamePlayer1] = useState("PLAYER 1");
  const [namePlayer2, setNamePlayer2] = useState("PLAYER 2");

  const showWinner = (symbol) => {
    let winnerName;
    if (symbol === "O") winnerName = namePlayer1;
    else winnerName = namePlayer2;

    alert(`${winnerName} Wins!`);
    window.location.reload();
  };
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="players-params">
        <PlayerSettings
          symbol="0"
          namePlayer={namePlayer1}
          setNamePlayer={setNamePlayer1}
        />
        <PlayerSettings
          symbol="X"
          namePlayer={namePlayer2}
          setNamePlayer={setNamePlayer2}
        />
      </div>
      <PlayBoard showWinner={showWinner} />
    </>
  );
};

export default TicTacToe;
