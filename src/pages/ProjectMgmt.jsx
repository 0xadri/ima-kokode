import { useState } from "react";
import LeftPanel from "../components/LeftPanel";
import MainContent from "../components/MainContent";

const VIEWS = {
  NO_PROJECT_SELECTED: "no-project-selected",
  CREATE_PROJECT: "create-project",
  PROJECT_OVERVIEW: "project-overview",
};

const PROJECT_DATA_INIT = {
  title: "",
  description: "",
  duedate: "",
  tasks: [],
};

const ProjectMgmt = () => {
  const [currMainView, setCurrMainView] = useState(VIEWS.NO_PROJECT_SELECTED);
  const [projectsData, setProjectsData] = useState(null);
  const [newProjectData, setNewProjectData] = useState(PROJECT_DATA_INIT);

  const handleClickMainPanel = (action) => {
    if (action === VIEWS.CREATE_PROJECT) {
      setCurrMainView(VIEWS.CREATE_PROJECT);
    } else if (action === VIEWS.NO_PROJECT_SELECTED) {
      setCurrMainView(VIEWS.NO_PROJECT_SELECTED);
    } else if (action === VIEWS.PROJECT_OVERVIEW) {
      // validate data
      // if valid
      // then go to next screen
      setCurrMainView(VIEWS.PROJECT_OVERVIEW);
    }
  };

  const handleChgProjDeets = (e, propName) => {
    setNewProjectData((prev) => ({
      ...prev,
      [propName]: e.target.value,
    }));
  };

  const handleAddTask = (task) => {
    setNewProjectData((prev) => ({
      ...prev,
      tasks: [...prev.tasks, task],
    }));
  };

  const handleRemoveTask = (task) => {
    setNewProjectData((prev) => {
      const clonePrevTasks = [...prev.tasks];
      const index = clonePrevTasks.indexOf(task);
      if (index > -1) clonePrevTasks.splice(index, 1); // Modify array
      return {
        ...prev,
        tasks: clonePrevTasks,
      };
    });
  };

  return (
    <>
      <h1>Project Management</h1>
      <div className="mgmt-main">
        <LeftPanel />
        <MainContent
          views={VIEWS}
          currView={currMainView}
          handleClick={handleClickMainPanel}
          projectsData={projectsData}
          handleChgProjDeets={handleChgProjDeets}
          handleAddTask={handleAddTask}
          handleRemoveTask={handleRemoveTask}
          newProjectData={newProjectData}
        />
      </div>
    </>
  );
};

export default ProjectMgmt;
