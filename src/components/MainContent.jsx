import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

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
        <h2 className="text-xl mt-4 mb-3">No Project Selected</h2>
        <p className="mb-3">Select a project or get started with a new one</p>
        <button
          className="mt-3 mb-2 px-4 py-2 border border-zinc-400 hover:border-zinc-200 rounded-lg cursor-pointer max-sm:py-2 max-sm:px-2 max-sm:text-xs text-white bg-gray-800 font-medium text-sm text-center hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-blue-300"
          onClick={() => handleClick(views.CREATE_PROJECT)}
        >
          Create New Project
        </button>
      </div>
    );
  } else if (currView === views.CREATE_PROJECT) {
    return (
      <div className="mgmt-content">
        <div className="mgmt-btns">
          <button
            onClick={handleSaveProjDetails}
            className="float-right ml-3 mt-3 mb-2 px-4 py-2 border border-zinc-400 hover:border-zinc-200 rounded-lg cursor-pointer max-sm:py-2 max-sm:px-2 max-sm:text-xs text-white bg-gray-800 font-medium text-sm text-center hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-blue-300"
          >
            Save
          </button>
          <button
            onClick={() => handleClick(views.NO_PROJECT_SELECTED)}
            className="float-right ml-3 mt-3 mb-2 px-4 py-2 border border-zinc-400 hover:border-zinc-200 rounded-lg cursor-pointer max-sm:py-2 max-sm:px-2 max-sm:text-xs text-white bg-gray-800 font-medium text-sm text-center hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-blue-300"
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
            className="mgmt-title-input bg-neutral-700 rounded px-1"
            value={newProjectData.title}
            onChange={(e) => handleChgProjDeets(e, "title")}
          />
          <label htmlFor="description" className="mgmt-description-label">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="mgmt-description-input bg-neutral-700 rounded px-1"
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
            className="mgmt-duedate-input bg-neutral-700 rounded px-1"
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
        <h2 className="mt-0 mb-3 text-3xl">{newProjectData.title}</h2>
        <p className="my-0 mb-3 text-neutral-400">{newProjectData.duedate}</p>
        <p className="mb-4">{newProjectData.description}</p>
        <div className="border-t-neutral-400 border-t-1">
          <h3 className="text-2xl mt-4">Tasks</h3>
          <input
            ref={newTaskRef}
            type="text"
            name="task"
            id="task"
            className="bg-neutral-700 rounded px-1"
            required
          />
          <button
            className="ml-3 mt-3 mb-2 px-4 py-2 border border-zinc-400 hover:border-zinc-200 rounded-lg cursor-pointer max-sm:py-2 max-sm:px-2 max-sm:text-xs text-white bg-gray-800 font-medium text-sm text-center hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-blue-300"
            onClick={handleAdd}
          >
            Add Task
          </button>
          {newProjectData.tasks.length > 0 ? (
            <ul className="mgmt-task-list">
              {newProjectData.tasks.map((task) => {
                return (
                  <li key={uuidv4()} className="mgmt-task-item">
                    <span className="mgmt-task-name">{task}</span>
                    <button
                      className="mt-3 mb-2 px-4 py-2 border border-zinc-400 hover:border-zinc-200 rounded-lg cursor-pointer max-sm:py-2 max-sm:px-2 max-sm:text-xs text-white bg-gray-800 font-medium text-sm text-center hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-blue-300"
                      onClick={() => handleRemoveTask(task)}
                    >
                      Clear
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="mt-3">This project does not have any tasks yet.</p>
          )}
        </div>
      </div>
    );
  }
};

export default MainContent;
