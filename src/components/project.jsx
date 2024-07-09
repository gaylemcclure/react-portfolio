import "../styles/Project.css";

const Project = ({ img, name, url, gitUrl }) => {
  
  const handleProjectLink = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleGitLink = () => {
    window.open(gitUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="project-wrapper">
      <div className="project-inner">
        <img className="project-icon" src={img} alt={`${name} logo`} />
        <div className="overlay">
          <div className="flex flex-row overlay-inner">
            <button className="text-button btn" onClick={() => handleProjectLink()}>
              {name}{" "}
            </button>
            <button className="btn icon-button" onClick={() => handleGitLink()}>
              <i className="fa-brands fa-github"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
