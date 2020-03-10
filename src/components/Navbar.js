
import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { HashRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  const logoStyles = {
    fontFamily: "Comfortaa",
    color: "#b2ebf2",
    fontSize: "150%",
  }

  const icon = {
    paddingLeft: "8px"
  }

  const navFont = {
    color: "#e0f7fa"
  }

  const ish = {
    fontSize: "80%"
  }
  return (
    <HashRouter>
      <MDBNavbar color="unique-color-dark" dark expand="md">
        <MDBNavbarBrand>
          <MDBNavLink to="/" style={logoStyles}>KETOISH GIRL</MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav center>
            <MDBNavItem>
            <MDBNavLink to="/MyStory">MY STORY</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/KetoBasics">KETO BASICS</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Resources">RESOURCES</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink to="/EventList">SPORTY DIVA EVENTS</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink to="/ScheduleAppointment">SCHEDULE AN APPOINTMENT</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink to="/Contact">CONTACT
            <MDBIcon style={icon} icon="envelope" />
            </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </HashRouter>
    );
  }
}

export default Navbar;
