import LeftPanel from "../components/LeftPanel";
import MainContent from "../components/MainContent";

const ProjectMgmt = () => {
  return (
    <>
      <h1>Project Management</h1>
      <div className="mgmt-main">
        <LeftPanel />
        <MainContent />
      </div>
    </>
  );
};

export default ProjectMgmt;
