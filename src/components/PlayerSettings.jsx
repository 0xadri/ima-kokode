import { useState } from "react";

const PlayerSettings = ({ symbol, namePlayer, setNamePlayer }) => {
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
          value={namePlayer}
          onChange={(e) => setNamePlayer(e.target.value)}
        />
      ) : (
        <span className="player-name">{namePlayer}</span>
      )}
      <span>{symbol}</span>
      <button className="save-edit-button" onClick={handleToggleEditSave}>
        {fieldIsEditMode ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default PlayerSettings;
