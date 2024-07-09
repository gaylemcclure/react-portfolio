import avatar from "../assets/about-avatar.png";
import Footer from "../components/footer";
import "../styles/About.css";


const AboutPage = () => {
  return (
    <div>
      <div className="about-wrapper flex">
        <div className="title-wrapper">
          <h1 className="title">About me</h1>
          <p className="text">Hi, I'm Gayle. Originally hailing from Belfast in Northern Ireland, I now reside in regional Victoria with my two small humans and lil fluffball. I am a full stack developer, with a passion for innovative design and interactive UI. When I'm not coding, you will find me roller skating, walking the dog, or chilling with my favourite people. </p>

          <p className="text">My journey in software development is fueled by curiosity and a drive to create meaningful solutions. Fuelled by a passion for continuous growth, I embrace the ever-evolving world of coding, constantly seeking new challenges and expanding my knowledge base. Join me on this exhilarating journey where technology meets creativity.</p>

          <p className="text skills">Coding skills</p>
          <div className="text hide-text">
            <p className="type line_1">HTML/CSS</p>
            <p className="type line_2">Javascript</p>
            <p className="type line_3">React</p>
            <p className="type line_4">node.js</p>
            <p className="type line_5">Express.js</p>
            <p className="type line_6">MongoDB/Mongoose</p>
            <p className="type line_7">Postgres/Sequelize</p> 
          </div>
        </div>
        <div className="avatar-wrapper flex">
          <img className="about-avatar" src={avatar} alt="avatar of woman with purple hair with two small children and a puppy" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
