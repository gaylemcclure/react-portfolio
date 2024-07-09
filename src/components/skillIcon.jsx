import "../styles/resume.css";

const SkillIcon = ({ img, name }) => {
  return (
    <div className="skill-wrapper">
      <div className="skill-inner">
        <img className="skill-icon" src={img} alt={`${name} logo`} />
        <div className="overlay">
          <div className="text">{name}</div>
        </div>
      </div>
    </div>
  );
};

export default SkillIcon;
