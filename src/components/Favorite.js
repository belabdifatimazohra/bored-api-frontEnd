import React from "react";
import { Link } from "react-router-dom";
import robot from "../images/robot.gif";
import { Navbar, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
function Favorite() {
  // get the state favoriteActivities from the store
  const favoriteActivities = useSelector((state) => state.favoriteActivities);
  console.log(favoriteActivities);
  return (
    <div>
      <Navbar collapseOnSelect>
        <Container>
          <Navbar.Brand>
            {" "}
            <Link to="/">
              {" "}
              <img src={robot} className="logo" alt="robot" />{" "}
              <span className="boredMe"> Bored Me </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Container>
      </Navbar>
      <div className="favorite">
      { favoriteActivities.map( activity =>
        <Card style={{ width: "18rem", height: "25%" }}>
          <Card.Body className="activityCard">
            <Card.Title>{activity.activity} </Card.Title>
            <Card.Text>{activity.key}</Card.Text>
        
          </Card.Body>
        </Card>
        )
      }
      </div>
    </div>
  );
}

export default Favorite;
