import { useState } from "react";

const NO_PROJECT_SELECTED = "no-project-selected";
const CREATE_PROJECT = "create-project";

const MainContent = () => {
  const [view, setView] = useState(NO_PROJECT_SELECTED);

  const handleClickCreate = () => {
    setView(CREATE_PROJECT);
  };
  const handleClickCancel = () => {
    setView(NO_PROJECT_SELECTED);
  };
  const handleClickSave = () => {
    // todo
    // setView("create-project");
  };

  if (view === NO_PROJECT_SELECTED) {
    return (
      <div className="mgmt-content">
        <h2>No Project Selected</h2>
        <p>Select a project or get started with a new one</p>
        <button onClick={handleClickCreate}>Create New Project</button>
      </div>
    );
  } else if (CREATE_PROJECT) {
    return (
      <div className="mgmt-content">
        <div className="mgmt-btns">
          <button onClick={handleClickSave} className="mgmt-save-btn">
            Save
          </button>
          <button onClick={handleClickCancel} className="mgmt-cancel-btn">
            Cancel
          </button>
        </div>
        <div>
          <label htmlFor="title" className="mgmt-title-label">
            Title
          </label>
          <input
            required
            type="text"
            name="title"
            className="mgmt-title-input"
          />
          <label htmlFor="description" className="mgmt-description-label">
            Description
          </label>
          <textarea name="description" className="mgmt-description-input" />
          <label htmlFor="duedate" className="mgmt-duedate-label">
            Due Date
          </label>
          <input
            required
            type="date"
            name="duedate"
            className="mgmt-duedate-input"
          />
        </div>
      </div>
    );
  }
};

export default MainContent;
