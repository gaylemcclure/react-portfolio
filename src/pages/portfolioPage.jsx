import "../styles/Portfolio.css";
import Project from "../components/project";
import task from "../assets/task.png";
import hydration from '../assets/hydration.png';
import note from '../assets/1.png';
import jate from '../assets/screenshot.png';
import payroll from '../assets/payroll-1.png'
import weather from '../assets/one.png';
import blog from '../assets/blog2.png'




const itemData = [
  {
    img: hydration,
    title: "Hydration App",
    url: "https://hydration-app-05aafcb6756d.herokuapp.com/",
    git: "https://github.com/gaylemcclure/hydration-app"
  },
  {
    img: task,
    title: "Task Board",
    url: "https://gaylemcclure.github.io/task-board/",
        git: "https://github.com/gaylemcclure/task-board"
  },
  {
    img: note,
    title: "Note Taker",
    url: "https://note-taker-47p3.onrender.com/",
        git: "https://github.com/gaylemcclure/note-taker"
  },
  {
    img: weather,
    title: "Weather Dashboard",
    url: "https://gaylemcclure.github.io/weather-dashboard/",
        git: "https://github.com/gaylemcclure/weather-dashboard"
  },
  {
    img: blog,
    title: "Personal Blog",
    url: "https://gaylemcclure.github.io/personal-blog/",
        git: "https://github.com/gaylemcclure/personal-blog"
  },
  {
    img: payroll,
    title: "Employee Payroll Tracker",
    url: "https://gaylemcclure.github.io/employee-payroll-tracker/",
        git: "https://github.com/gaylemcclure/employee-payroll-tracker"
  },
  {
    img: jate,
    title: "JATE - Text Editor",
    url: "https://pwa-editor.onrender.com/",
    git: "https://github.com/gaylemcclure/pwa-editor"
  },
];

const PortfolioPage = () => {
  return (
    <div className="portfolio-wrapper flex flex-col">
      <h1>Portfolio</h1>
      <div className="project-container flex flex-row">
        {itemData.map((item) => {
          return <Project key={item.img} img={item.img} name={item.title} url={item.url} gitUrl={item.git} />;
        })}
        </div>
    </div>
  );
};

export default PortfolioPage;
