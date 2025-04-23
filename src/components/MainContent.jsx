import { useState, useRef } from "react";

function wordToUniqueNumber(word) {
  let uniqueNumber = "";
  for (let i = 0; i < word.length; i++) {
    uniqueNumber += word.charCodeAt(i);
  }
  return parseInt(uniqueNumber);
}

const MainContent = ({
  views,
  currView,
  handleClick,
  handleChgProjDeets,
  handleAddTask,
  handleRemoveTask,
  newProjectData,
}) => {
  const newTaskRef = useRef();

  const handleAdd = () => {
    const task = newTaskRef.current.value;
    if (task && task.replaceAll(" ", "")) {
      handleAddTask(task);
    } else {
      alert("Add a task first");
    }
  };

  const handleSaveProjDetails = () => {
    if (
      newProjectData.title &&
      newProjectData.title.replaceAll(" ", "").length > 0 &&
      newProjectData.description &&
      newProjectData.description.replaceAll(" ", "").length > 0 &&
      newProjectData.duedate
    ) {
      handleClick(views.PROJECT_OVERVIEW);
    } else {
      alert("Finish Filling The Form");
    }
  };

  if (currView === views.NO_PROJECT_SELECTED) {
    return (
      <div className="mgmt-content no-project-view">
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
          <button onClick={handleSaveProjDetails} className="mgmt-save-btn">
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
            id="title"
            className="mgmt-title-input"
            value={newProjectData.title}
            onChange={(e) => handleChgProjDeets(e, "title")}
          />
          <label htmlFor="description" className="mgmt-description-label">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="mgmt-description-input"
            value={newProjectData.description}
            onChange={(e) => handleChgProjDeets(e, "description")}
          />
          <label htmlFor="duedate" className="mgmt-duedate-label">
            Due Date
          </label>
          <input
            required
            type="date"
            name="duedate"
            id="duedate"
            className="mgmt-duedate-input"
            value={newProjectData.duedate}
            onChange={(e) => handleChgProjDeets(e, "duedate")}
          />
        </div>
      </div>
    );
  } else if (currView === views.PROJECT_OVERVIEW) {
    // todo
    return (
      <div className="mgmt-content">
        <h2 className="mgmt-project-title">{newProjectData.title}</h2>
        <p className="mgmt-project-duedate">{newProjectData.duedate}</p>
        <p className="mgmt-project-description">{newProjectData.description}</p>
        <div className="mgmt-tasks-section">
          <h3 className="mgmt-tasks-title">Tasks</h3>
          <input
            ref={newTaskRef}
            type="text"
            name="task"
            id="task"
            className="mgmt-add-task-input"
            required
          />
          <button className="mgmt-add-task-btn" onClick={handleAdd}>
            Add Task
          </button>
          {newProjectData.tasks.length > 0 ? (
            <ul className="mgmt-task-list">
              {newProjectData.tasks.map((task) => {
                return (
                  <li key={wordToUniqueNumber(task)} className="mgmt-task-item">
                    <span className="mgmt-task-name">{task}</span>
                    <button
                      className="mgmt-task-clear-btn"
                      onClick={() => handleRemoveTask(task)}
                    >
                      Clear
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="mgmt-tasks-notasksyet">
              This project does not have any tasks yet.
            </p>
          )}
        </div>
      </div>
    );
  }
};

export default MainContent;
