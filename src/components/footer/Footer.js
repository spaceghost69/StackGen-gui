import React from "react"
import { Row, Col, Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import "./Footer.css"
import SocialMediaIcons from "../SocialMediaIcons"

const socialMediaIcons = {
  urls: ["http://twitter.com/StackGen", "http://facebook.com/StackGen"],
  color: "#FF0000"
}

const Footer = () => {
  return (
    <>
      <Row>
        <Col>
          <Navbar bg="dark">
            <Navbar.Brand href="#home">
              <img
                src="http://stackgen.io/logos/logo-192x192.png"
                width="30"
                className="d-inline-block align-bottom"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            {"Starter StackGen"}

            <Nav className="mr-auto">
              <Nav.Link href="#docs">docs</Nav.Link>
              <Nav.Link href="#blog">blog</Nav.Link>
              <Nav.Link href="#pricing">pricing</Nav.Link>
            </Nav>

            <Col>
              <SocialMediaIcons urls={socialMediaIcons.urls} />
            </Col>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col>
          Built in San Francisco by
          <a
            href="http://starter.io"
            className="font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;Starter Inc.
          </a>
        </Col>
      </Row>
    </>
  )
}

export default Footer
