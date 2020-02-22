import React from 'react'
import { Navbar as BSNavbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

// note: bootstrap navbar, can add custom css later
export const Navbar = () => {
  return (
    <BSNavbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <BSNavbar.Brand href="/">PublicPotluck</BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />
      <BSNavbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/discover">
            <Nav.Link>Discover</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/create">
            <Nav.Link>Start a Potluck</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer to="/profile/:profileId">
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>
        </Nav>
      </BSNavbar.Collapse>
    </BSNavbar>
  )
}
