import Nav from './nav';
import '../styles/Header.css';


const Header = () => {
  return (
    <div className="header-wrapper flex flex-row">
      <div className="">
        <h1 className="name">GM</h1>
      </div>
      <Nav />
    </div>
  );
};

export default Header;
