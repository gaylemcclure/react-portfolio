import linked from '../assets/linkedin.svg';
import git from '../assets/github-1.svg';
import '../styles/Footer.css';


const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
   
    return (
        <div className="footer-wrapper flex flex-col">
            <p>copyright Gayle McClure - {year}</p>
            <div className="icons">
                <a href="https://www.linkedin.com/in/gayle-mcclure-021b97238" target="_blank" rel='noreferrer'><img className="social-icon" src={linked} alt="linked in logo" /></a>
                <a href="https://github.com/gaylemcclure" target="_blank" rel='noreferrer'><img className="social-icon" src={git} alt="github logo" /></a>
                <a href="https://www.instagram.com/lifeispeechee/" target="_blank" rel='noreferrer'><i className="fa-brands fa-instagram"></i></a>
            </div>

        </div>
    )
}

export default Footer;