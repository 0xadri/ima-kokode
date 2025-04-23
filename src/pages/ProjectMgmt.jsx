import { useState } from "react";
import LeftPanel from "../components/LeftPanel";
import MainContent from "../components/MainContent";

const VIEWS = {
  NO_PROJECT_SELECTED: "no-project-selected",
  CREATE_PROJECT: "create-project",
  PROJECT_OVERVIEW: "project-overview",
};

const ProjectMgmt = () => {
  const [currMainView, setCurrMainView] = useState(VIEWS.NO_PROJECT_SELECTED);
  const [projectsData, setProjectsData] = useState(null);

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
        />
      </div>
    </>
  );
};

export default ProjectMgmt;
