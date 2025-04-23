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
      <h2 className="mgmt-left-nav-title">Your Projects</h2>
      <button className="mgmt-left-add-btn" onClick={handleAddNewProject}>
        + Add Project
      </button>
      {leftMenuItems && (
        <ul className="mgmt-left-nav-proj-list">
          {leftMenuItems.map((title) => {
            return (
              <li
                key={wordToUniqueNumber(title)}
                onClick={() => handleProjectClicked(title)}
                className={`mgmt-left-nav-proj-item ${
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
