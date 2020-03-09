
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
    fontFamily: "Libre Franklin",
    color: "#adebeb",
    fontSize: "150%",
  }

  const navFont = {
    color: "#ebfafa"
  }
  return (
    <HashRouter>
      <MDBNavbar color="unique-color-dark" dark expand="md">
        <MDBNavbarBrand>
          <strong style={logoStyles}>Keto<em>ish</em> Girl</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
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
            <MDBNavLink to="/EventList">SportyDiva Runs</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink to="/ScheduleAppointment">Schedule an Appointment</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="https://www.facebook.com/ketoishgirl">
                <MDBIcon fab icon="facebook" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="https://www.instagram.com/ketoishgirl/?hl=en">
                <MDBIcon fab icon="instagram" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="envelope" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Email Rose</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </HashRouter>
    );
  }
}

export default Navbar;
