import { useState, useRef } from "react";
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

// Could:
//   1. Project Delete Feature
//   2. Remove text in "add task" input field

const ProjectMgmt = () => {
  const [currMainView, setCurrMainView] = useState(VIEWS.NO_PROJECT_SELECTED);
  const otherProjectsData = useRef([]);
  const [newProjectData, setNewProjectData] = useState(PROJECT_DATA_INIT);
  const [leftMenuItems, setLeftMenuItems] = useState([]);

  const handleClickMainPanel = (action) => {
    if (action === VIEWS.CREATE_PROJECT) {
      setCurrMainView(VIEWS.CREATE_PROJECT);
    } else if (action === VIEWS.NO_PROJECT_SELECTED) {
      setCurrMainView(VIEWS.NO_PROJECT_SELECTED);
    } else if (action === VIEWS.PROJECT_OVERVIEW) {
      setCurrMainView(VIEWS.PROJECT_OVERVIEW);
      updateLeftMenu();
    }
  };

  const updateLeftMenu = () => {
    const title = newProjectData.title;
    setLeftMenuItems((prev) => {
      const newLeftMenuItems = [...leftMenuItems]; // Clone array for immutability
      newLeftMenuItems.push(title); // Modify array
      return newLeftMenuItems;
    });
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

  const handleProjectClicked = (projectTitle) => {
    // put active proj in memory
    const cloneActiveProjectData = {
      ...newProjectData,
      tasks: [...newProjectData.tasks],
    };
    otherProjectsData.current.push(cloneActiveProjectData);
    // find selected project in ref
    for (const projectData of otherProjectsData.current) {
      if (projectData.title === projectTitle) {
        // clone selected project from ref to current state
        setNewProjectData({
          ...projectData,
          tasks: [...projectData.tasks],
        });
        // remove selected project from ref
        const index = otherProjectsData.current.indexOf(projectTitle);
        if (index > -1) otherProjectsData.current.splice(index, 1); // Modify array
      }
    }
    // go to relevant view
    setCurrMainView(VIEWS.PROJECT_OVERVIEW);
  };

  const handleAddNewProject = () => {
    // put active proj in memory
    const cloneProjectData = {
      ...newProjectData,
      tasks: [...newProjectData.tasks],
    };
    otherProjectsData.current.push(cloneProjectData);
    // create fresh state for newProjectData
    setNewProjectData(PROJECT_DATA_INIT);
    // set correct view
    setCurrMainView(VIEWS.CREATE_PROJECT);
  };

  return (
    <>
      <h1>Project Management</h1>
      <div className="mgmt-main">
        <LeftPanel
          leftMenuItems={leftMenuItems}
          handleAddNewProject={handleAddNewProject}
          activeTitle={newProjectData.title}
          handleProjectClicked={handleProjectClicked}
        />
        <MainContent
          views={VIEWS}
          currView={currMainView}
          handleClick={handleClickMainPanel}
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
