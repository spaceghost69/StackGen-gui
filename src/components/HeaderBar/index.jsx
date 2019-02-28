import React, { useState } from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import "./NavBar.css"

const todos = {
  1: {
    text: "First",
    state: "todo"
  },
  2: {
    text: "Last Name",
    state: "todo"
  },
  3: {
    text: "SSN",
    state: "todo"
  },
  4: {
    text: "Email",
    state: "todo"
  }
}
class HeaderBar extends React.Component {
  render() {
    // const [todoValues, setValue] = useState(todos)
    const { children } = this.props
    return (
      <Navbar bg="dark" className="mainHeader">
        <Navbar.Brand href="#home">
          <img
            src="http://stackgen.io/logos/logo-192x192.png"
            width="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="#docs">docs</Nav.Link>
          <Nav.Link href="#blog">blog</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
}

export default HeaderBar
