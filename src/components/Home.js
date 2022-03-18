import React from "react";
import { Link } from "react-router-dom";
import robot from "../images/robot.gif";
import { Navbar, Nav, Container } from "react-bootstrap";
import MyCard from "./MyCard";


function Home() {

  

  return (
    <div>
      <Navbar collapseOnSelect>
        <Container>
          <Navbar.Brand>
            {" "}
            <img src={robot} className="logo" alt="robot" />{" "}
            <span className="boredMe"> Bored Me </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                {" "}
                <Link to="/Favorite">
                  {" "}
                  <span className="classA"> Favorites </span>
                </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="main">
      
            <MyCard  />
        
        
      </div>
    </div>
  );
}

export default Home;
