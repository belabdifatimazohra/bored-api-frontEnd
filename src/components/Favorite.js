import React from 'react';
import { Link } from "react-router-dom";
import robot from "../images/robot.gif";
import { Navbar, Container } from "react-bootstrap";
function Favorite() {
    return (
        <div>
            <Navbar collapseOnSelect >
                <Container>
                    <Navbar.Brand > <Link to="/"> <img src= {robot} className="logo" alt="robot"/> <span className="boredMe"> Bored Me  </span></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    
                </Container>
            </Navbar>
        </div>
    );
}

export default Favorite;