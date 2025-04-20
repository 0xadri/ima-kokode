import PlayBoard from "../components/PlayBoard";
import PlayerSettings from "../components/PlayerSettings";

const TicTacToe = () => {
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="players-params">
        <PlayerSettings name="PLAYER 1" symbol="0" />
        <PlayerSettings name="PLAYER 2" symbol="X" />
      </div>
      <PlayBoard />
    </>
  );
};

export default TicTacToe;
