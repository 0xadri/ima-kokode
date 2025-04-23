const LeftPanel = () => {
  return (
    <div className="mgmt-left-nav">
      <h2 className="mgmt-left-nav-title">Your Projects</h2>
      <button className="mgmt-left-add-btn">+ Add Project</button>
      <ul className="mgmt-left-nav-proj-list">
        <li className="mgmt-left-nav-proj-item activetab">Project One</li>
        <li className="mgmt-left-nav-proj-item">Project Two</li>
      </ul>
    </div>
  );
};

export default LeftPanel;
