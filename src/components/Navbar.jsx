
import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon } from "mdbreact";

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
    // color: "#4db6ac",
    fontSize: "150%",
  }

  const icon = {
    paddingLeft: "10px"
  }

  return (
      <MDBNavbar className="navbar navbar-expand-lg" color="unique-color-dark" dark expand="md" fixed="top">
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
            <MDBNavLink to="/SportyDivaEvents">SPORTY DIVA EVENTS</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink to="/ScheduleAppointment">APPOINTMENTS</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink to="/Contact">CONTACT<MDBIcon style={icon} icon="envelope" />
            </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;
