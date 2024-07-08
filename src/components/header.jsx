import Nav from './nav';
import { useState } from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  const [menu, setMenu] = useState("");

  //Function to change the colour of the active nav link
  const handleLink = (e) => {
    setMenu(e.target.innerHTML);
  }


  return (
    <div className="header-wrapper flex flex-row">
      <div className="">
        <Link className="name-link" to="/" onClick={(e) => handleLink(e)}><h1 className="name">GM</h1></Link>
      </div>
      <Nav menu={menu} handleLink={handleLink} />
    </div>
  );
};

export default Header;
