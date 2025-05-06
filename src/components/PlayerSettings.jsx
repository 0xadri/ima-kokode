import { useState } from "react";

const PlayerSettings = ({ symbol, namePlayer, setNamePlayer }) => {
  const [fieldIsEditMode, setFieldIsEditMode] = useState(false);

  const handleToggleEditSave = () => {
    setFieldIsEditMode((fieldIsEditMode) => !fieldIsEditMode);
  };

  return (
    <div className="inline-block">
      {fieldIsEditMode ? (
        <input
          className="inline-block mr-5 min-w-[90px] max-w-[120px] bg-neutral-700 rounded px-1"
          name="player-name"
          type="text"
          value={namePlayer}
          onChange={(e) => setNamePlayer(() => e.target.value)}
        />
      ) : (
        <span className="inline-block mr-2 min-w-[90px] max-w-[120px] rounded px-1">
          {namePlayer}
        </span>
      )}
      <span>{symbol}</span>
      <button className="save-edit-button" onClick={handleToggleEditSave}>
        {fieldIsEditMode ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default PlayerSettings;
