
import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styled, { css } from 'styled-components';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon } from "mdbreact";

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  // const logoStyles = {
  //   fontFamily: "Comfortaa",
  //   color: "#b2ebf2",
  //   // color: "#4db6ac",
  //   fontSize: "150%",
  // }

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
      <MDBNavbar style={{padding: "0 90px"}} className="navbar navbar-expand-lg" color="unique-color-dark" dark expand="md" fixed="top" transparent scrolling>
        <MDBNavbarBrand>
          <div onClick={() => scroll.scrollToTop()} className="logoStyles">KETOISH GIRL</div>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav center>
            <MDBNavItem style={navItem}>
                <Link
                  activeClass="active"
                  to="myStory"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration= {500}
                  style={navLink}
                >
                  MY STORY
                </Link>
                {/* <MDBNavLink to="/" >TEST</MDBNavLink> */}
            </MDBNavItem>
            <MDBNavItem style={navItem}>
                <Link
                  activeClass="active"
                  to="ketoBasics"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration= {500}
                  style={navLink}
                >
                  KETO BASICS
                </Link>
              
            </MDBNavItem>
            {/* <MDBNavItem style={navItem}>
                <Link
                  activeClass="active"
                  to="resources"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration= {500}
                  style={navLink}
                >
                  RESOURCES
                </Link>
              
            </MDBNavItem> */}
            <MDBNavItem style={navItem}>
              <Link
                  activeClass="active"
                  to="sportyDivaEvents"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration= {500}
                  style={navLink}
                >
                  SPORTY DIVA EVENTS
                </Link>
              
            </MDBNavItem>
            <MDBNavItem style={navItem}>
                <Link
                  activeClass="active"
                  to="scheduleAppointment"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration= {500}
                  style={navLink}
                >
                  APPOINTMENTS
                </Link>
            </MDBNavItem>
            <MDBNavItem style={navItem}>
             <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-75}
                duration= {500}
                style={navLink}
              >
                <MDBIcon style={icon} icon="envelope" />
                CONTACT
               </Link>  
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;
