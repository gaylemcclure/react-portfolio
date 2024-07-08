import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import avatar from '../assets/website-avatar.png'
import "../styles/Home.css";
import Footer from "../components/footer";

const texts = ["FULL STACK DEVELOPER", "SOFTWARE DEVELOPER", "MERN STACK DEVELOPER"];
const HomePage = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      setTextIndex((index) => index + 1);
    }, 3000);
    return () => clearInterval(int);
  }, []);

  return (
    <div>
    <div className="home-wrapper flex flex-row">
      <div className="text-section flex flex-col">
        <h1 className="reg-text">Hey there, welcome to my portfolio</h1>
        <h1 className="name-text">
          <span className="reg-text">I'm </span>Gayle McClure.
        </h1>
      

      <h1 className="text-animation">
        <TextTransition springConfig={presets.wobbly}>{texts[textIndex % texts.length]} </TextTransition>
      </h1>
      </div>
      <div className="avatar flex">
        <img src={avatar} alt="purple haired avatar sitting at a computer" />
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default HomePage;
