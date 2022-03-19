import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import robot from "../images/robot.gif";
import { Navbar, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { RiDeleteBinFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deletFromFavorite } from "../redux/actions/boredActions";

function Favorite() {
  // get the state favoriteActivities from the store
  let fav = JSON.parse(localStorage.getItem("favorites")) || [];
  let favoriteActivities = fav;
  // dispatch info state
  const dispatch = useDispatch();

  // delete favorite state
  const [toggleDelete, setToggleDelete] = useState(false);
  const deleteFavorite = (key) => {
    setToggleDelete(!toggleDelete);
    dispatch(deletFromFavorite({ id: key }));
    console.log(key + " delete id");
  };
  // Load Random activity
  useEffect(() => {
    favoriteActivities = JSON.parse(localStorage.getItem("favorites"));
  }, [toggleDelete]);
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
        {favoriteActivities.map((activity) => {
          return (
            <Card style={{ width: "18rem", height: "15%" }} key={activity.id}>
              <Card.Body className="activityCard">
                <div>
                  <Card.Title>{activity.activity} </Card.Title>
                  <Card.Text>{activity.type}</Card.Text>
                </div>
                <RiDeleteBinFill
                  className="delete"
                  onClick={() => deleteFavorite(activity.id)}
                />
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Favorite;
