import { useState } from "react";

const PlayerSettings = ({ name, symbol }) => {
  const [playerName, setPlayerName] = useState(name);
  const [fieldIsEditMode, setFieldIsEditMode] = useState(false);

  const handleToggleEditSave = (e) => {
    if (fieldIsEditMode) setFieldIsEditMode(false);
    else setFieldIsEditMode(true);
  };

  return (
    <div className="player-params">
      {fieldIsEditMode ? (
        <input
          className="player-name"
          name="player-name"
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
      ) : (
        <span className="player-name">{playerName}</span>
      )}
      <span>{symbol}</span>
      <button className="save-edit-button" onClick={handleToggleEditSave}>
        {fieldIsEditMode ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default PlayerSettings;
