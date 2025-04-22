import { useState } from "react";

const MainContent = ({ views, currView, handleClick }) => {
  if (currView === views.NO_PROJECT_SELECTED) {
    return (
      <div className="mgmt-content">
        <h2>No Project Selected</h2>
        <p>Select a project or get started with a new one</p>
        <button onClick={() => handleClick(views.CREATE_PROJECT)}>
          Create New Project
        </button>
      </div>
    );
  } else if (currView === views.CREATE_PROJECT) {
    return (
      <div className="mgmt-content">
        <div className="mgmt-btns">
          <button
            onClick={() => handleClick(views.PROJECT_OVERVIEW)}
            className="mgmt-save-btn"
          >
            Save
          </button>
          <button
            onClick={() => handleClick(views.NO_PROJECT_SELECTED)}
            className="mgmt-cancel-btn"
          >
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
  } else if (currView === views.PROJECT_OVERVIEW) {
    // todo
    return (
      <div>
        <h2>TODO: Project Name</h2>
        <p>TODO: Project Date</p>
        <p>TODO: Project Description</p>
        <div>
          <h3>Tasks</h3>
          <label htmlFor="task">Add Task</label>
          <input type="text" name="task" />
          <p>This project does not have any tasks yet.</p>
        </div>
      </div>
    );
  }
};

export default MainContent;
