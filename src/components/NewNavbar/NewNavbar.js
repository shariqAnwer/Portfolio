import "./NewNavbar.css";

import { FaFolderOpen, FaUser } from "react-icons/fa";
import { IoHomeSharp, IoMenuSharp } from "react-icons/io5";
import {
  MobileIcon,
  Nav,
  NavContainer,
  NavItem,
  NavLogo,
  NavMenu,
} from "./NewNavbarStyles";
import React, { Fragment, useState } from "react";

import { BsFillGearFill } from "react-icons/bs";
import CloseIcon from "@material-ui/icons/Close";
import Drawer from "@material-ui/core/Drawer";
import { FaBars } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import { HiDocumentText } from "react-icons/hi";
import { MdPhone } from "react-icons/md";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";

// ---------------------------

const NewNavbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <Fragment>
      <Nav className={colorChange ? "navbar colorChange" : "navbar"}>
        <NavContainer>
          <NavLogo></NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink
                className="new-navlink-css"
                to="/"
                smooth={true}
                spy="true"
                duration={2000}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="new-navlink-css" to="/#about">
                About
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink className="new-navlink-css" to="/#resume">
                Education
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink className="new-navlink-css" to="/#skills">
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="new-navlink-css" to="/#projects">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="new-navlink-css" to="/#contacts">
                Contact
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </Fragment>
  );
};

export default NewNavbar;
