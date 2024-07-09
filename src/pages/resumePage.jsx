import "../styles/resume.css";
import { Button } from "@mui/material";
import SkillIcon from "../components/skillIcon";
import Footer from "../components/footer";
//Import icons for skill section
import { iconData } from "../components/iconData";

const ResumePage = () => {
  const handleDownload = () => {
    const pdfUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="res-container">
      <div className="resume-wrapper flex flex-col">
        <h1>Resume</h1>
        <Button onClick={handleDownload}>Download resume</Button>
        <div className=" icon-wrapper flex flex-row">
          {iconData.map((icon) => {
            return <SkillIcon key={icon.id} img={icon.img} name={icon.name} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResumePage;
