
import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useHistory } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon } from "mdbreact";

const Navbar = () => {
// state = {
//   isOpen: false
// };

// toggleCollapse = () => {
//   this.setState({ isOpen: !this.state.isOpen });
// }


// render() {
let history = useHistory();

  const icon = {
    paddingRight: "10px"
  }

  const navLink = {
    color: "rgba(255, 255, 255, 0.9)",
  }

  const navItem = {
    padding: "10px 0"
  }

  return (
      <MDBNavbar style={{padding: "0 90px"}} className="navbar navbar-expand-lg" color="unique-color-dark" dark expand="md" fixed="top" scrolling>
        <MDBNavbarBrand>
          <div onClick={() => history.push("/")} className="logoStyles">KETOISH GIRL</div>
        </MDBNavbarBrand>
        {/* <MDBNavbarToggler onClick={this.toggleCollapse} /> */}
        {/* <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar> */}
          <MDBNavbarNav center>
            <MDBNavItem style={navItem}>
                <Link
                  onClick={() => history.push("/")}
                  activeClass="active"
                  to="myStory"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration= {500}
                  style={navLink}
                >
                  MY STORY
                </Link>
            </MDBNavItem>
            <MDBNavItem style={navItem}>
                <Link
                  onClick={() => history.push("/")}
                  activeClass="active"
                  to="scheduleAppointment"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration= {500}
                  style={navLink}
                >
                  SERVICES
                </Link>
            </MDBNavItem>
            <MDBNavItem style={navItem}>
                <Link
                  onClick={() => history.push("/")}
                  activeClass="active"
                  to="ketoBasics"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration= {500}
                  style={navLink}
                >
                  KETO BASICS
                </Link>
            </MDBNavItem>
            <MDBNavItem style={navItem}>
              <Link
                  onClick={() => history.push("/")}
                  activeClass="active"
                  to="sportyDivaEvents"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration= {500}
                  style={navLink}
                >
                  EVENTS
                </Link>
            </MDBNavItem>
            <MDBNavItem style={navItem}>
             <Link
                onClick={() => history.push("/")}
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
                style={navLink}
              >
                <MDBIcon style={icon} icon="envelope" />
                CONTACT
               </Link>  
            </MDBNavItem>
          </MDBNavbarNav>
        {/* </MDBCollapse> */}
      </MDBNavbar>
    );
  }
// }

export default Navbar;
