import { React, useState, useEffect } from "react";
import { Button, Card} from "react-bootstrap";
import { RiHeart3Fill } from "react-icons/ri";
import axios from "axios";
import { addToFavorite } from "../redux/actions/boredActions";
import { useDispatch } from "react-redux";
import ActivityType from "./ActivityType";

function MyCard() {
  // dispatch info state
  const dispatch = useDispatch();
  // activity random state
  const [randomActivity, setRandomActivity] = useState();
  // activity type state
  const [typeActivity, setTypeActivity] = useState("education");
  // activity favorite state
  const [toggleHeart, setToggleHeart] = useState(false);

  // Get the random activity with axios
  const getRandomActivity = async () => {
    const response = await axios.get(
      `http://www.boredapi.com/api/activity?type=${typeActivity}`
    );
    setRandomActivity(response.data);
    setToggleHeart(false);
  };

  const handleTypeChange = (e) => setTypeActivity(e.target.value);
  const addFavorite = (e) => {
    // Change Color
    setToggleHeart(!toggleHeart);
    dispatch(
      addToFavorite({
        id: randomActivity.key,
        activity: randomActivity.activity,
        type: randomActivity.type,
      })
    );
  };
  // Load Random activity
  useEffect(() => {
    getRandomActivity();
  }, [typeActivity]);
  return (
    <Card style={{ width: "18rem", height: "25%" }}>
      {randomActivity && (
        <Card.Body className="activityCard">
          <div>
            <Card.Title>{randomActivity.activity} </Card.Title>
            <Card.Text>{randomActivity.type}</Card.Text>
          </div>
          <RiHeart3Fill   className= {`heart ${toggleHeart ? "active" : ""}`}
            onClick={addFavorite}
          />
        </Card.Body>
      )}
      {/* Activity Types */}
      <ActivityType handleTypeChange={handleTypeChange} />
      <Button
        style={{ background: "#D82148", border: "0", fontWeight: "bold" }}
        onClick={getRandomActivity}
      >
        {" "}
        Random activity{" "}
      </Button>
    </Card>
  );
}

export default MyCard;
