import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

//Links to show on the header
const links = [
  {
    id: 1,
    name: "About",
    url: "/about",
  },
  {
    id: 2,
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    name: "Contact",
    url: "/contact",
  },
  {
    id: 4,
    name: "Resume",
    url: "/resume",
  },
  
];

const Nav = ({ menu, handleLink }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  //Opens the mobile menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //Redirects and closes the menu
  const handleClose = (e) => {
    setAnchorEl(null);
    navigate(e.target.id);
  };


  return (
    <>
      {/* if mobile, show menu icon */}
      <div className="mobile flex left-auto">
        <div>
          <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
            <span className="material-symbols-outlined">menu</span>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {links.map((link) => {
              return (
                <MenuItem key={link.id} onClick={(e) => handleClose(e)} id={link.url}>
                  {link.name}
                </MenuItem>
              );
            })}
          </Menu>
        </div>
      </div>

      {/* if screen, show full menu */}
      <div className="screen left-auto">
        {links.map((link) => {
            return <Link key={link.id} onClick={(e) => handleLink(e)} className={menu === link.name ? "active nav-link" : "nav-link"} to={link.url}>{link.name}</Link>
        })}
      </div>
    </>
  );
};

export default Nav;
