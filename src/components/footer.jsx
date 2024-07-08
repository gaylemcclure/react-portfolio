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
                <img className="social-icon" src={linked} alt="linked in logo" />
                <img className="social-icon" src={git} alt="github logo" />
            </div>

        </div>
    )
}

export default Footer;