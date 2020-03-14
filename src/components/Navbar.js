
import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import {Link} from 'react-router-dom'


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

  const ish = {
    fontSize: "80%"
  }
  return (
      <MDBNavbar color="unique-color-dark" dark expand="md">
        <MDBNavbarBrand>
          <MDBNavLink to="/" style={logoStyles}>KETOISH GIRL</MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav center>
            <MDBNavItem>
            <MDBNavLink to="/MyStory">My Story</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/KetoBasics">Keto Basics</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Resources">Resources</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink to="/EventList">Sporty Diva Events</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink to="/ScheduleAppointment">Schedule an Appointment</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink to="/Contact">Contact
            <MDBIcon style={icon} icon="envelope" />
            </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;
