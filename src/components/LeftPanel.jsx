function wordToUniqueNumber(word) {
  let uniqueNumber = "";
  for (let i = 0; i < word.length; i++) {
    uniqueNumber += word.charCodeAt(i);
  }
  return parseInt(uniqueNumber);
}

const LeftPanel = ({
  leftMenuItems,
  handleAddNewProject,
  activeTitle,
  handleProjectClicked,
}) => {
  return (
    <div className="mgmt-left-nav">
      <h2 className="uppercase text-base mt-2 mb-5">Your Projects</h2>
      <button
        className="px-4 py-2 text-white border border-zinc-400 bg-gray-800 text-sm rounded-lg cursor-pointer hover:border-zinc-200 hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-blue-300"
        onClick={handleAddNewProject}
      >
        + Add Project
      </button>
      {leftMenuItems && (
        <ul className="mgmt-left-nav-proj-list">
          {leftMenuItems.map((title) => {
            return (
              <li
                key={wordToUniqueNumber(title)}
                onClick={() => handleProjectClicked(title)}
                className={`mgmt-left-nav-proj-item my-3 hover:cursor-pointer hover:bg-neutral-600 ${
                  title === activeTitle && "activetab"
                }`}
              >
                {title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default LeftPanel;
