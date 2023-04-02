import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import { useState } from "react";


function Navbar() {
  const [showNav, setShowNav] = useState(false)
  const [hideNav, setHideNav] = useState(false)

  function triggerNav() {
    if (showNav) {
      hide()
    } else {
      setShowNav(true)
      setHideNav(false)
    }
  }

  function hide() {
    if (showNav) {
      setShowNav(false)
      setHideNav(true)
    }
  }

  return (
    <nav>
      <Link to="/">
        <h1 className="zenDots name">KiraTeresaSoba</h1>
        <h1 className="zenDots initials" onClick={hide}>KTS</h1>
      </Link>

      <div className="burger-menu" onClick={triggerNav}>&#9776;</div>

      <div className={`navigation ${showNav ? 'show-nav' : ''} ${hideNav ? 'hide-nav' : ''}`}>

        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={hide}>
          <span>About</span>
        </NavLink>

        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} onClick={hide}>
          <span>Projects</span>
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={hide}>
          <span>Connect</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;