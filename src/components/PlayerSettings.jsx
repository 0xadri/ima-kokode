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
      <button
        className="mx-4 mt-3 mb-2 px-4 py-2 border border-zinc-400 hover:border-zinc-200 rounded-lg cursor-pointer max-sm:py-2 max-sm:px-2 max-sm:text-xs text-white bg-gray-800 font-medium text-sm text-center hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-blue-300"
        onClick={handleToggleEditSave}
      >
        {fieldIsEditMode ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default PlayerSettings;
