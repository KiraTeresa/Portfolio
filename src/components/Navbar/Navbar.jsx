import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
// import Home from "../../assets/images/KiraTeresaSoba.png"
import { useState } from "react";


function Navbar() {
  const [showNav, setShowNav] = useState(false)
  const [hideNav, setHideNav] = useState(false)
  // const [reset, setReset] = useState(false)

  function triggerNav() {
    if (showNav) {
      hide()
    } else {
      setShowNav(true)
      setHideNav(false)
    }
    // setReset(false)
    // console.log("CLICKED")
  }

  function hide() {
    if (showNav) {
      setShowNav(false)
      setHideNav(true)
    }
  }

  // if (window.innerWidth > 420 && !reset) {
  //   setShowNav(false)
  //   setHideNav(false)
  //   setReset(true)
  // }

  return (
    <nav>
      <Link to="/">
        <h1 className="zenDots name">KiraTeresaSoba</h1>
        <h1 className="zenDots initials" onClick={hide}>KTS</h1>
        {/* {`${reset}`} */}
      </Link>

      {/* <div className="navigation"> */}
      <div className="burger-menu" onClick={triggerNav}>&#9776;</div>
      <div className={`navigation ${showNav ? 'show-nav' : ''} ${hideNav ? 'hide-nav' : ''}`}>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={hide}>
          About
        </NavLink>

        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} onClick={hide}>
          Projects
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={hide}>
          Contact
        </NavLink>
      </div>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;