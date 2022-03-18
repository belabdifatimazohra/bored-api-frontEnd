import { React, useState, useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";
import {RiHeart3Fill} from 'react-icons/ri';
import axios from "axios";
import {addToFavorite, randomActivity} from '../redux/actions/boredActions'
import { useDispatch, useSelector } from "react-redux";

function MyCard() {
  // dispatch info state
  const dispatch = useDispatch();
  // activity random state
  const [randomActivity, setRandomActivity] = useState();
  // activity type state
  const [typeActivity, setTypeActivity] = useState('education');
  // activity favorite state
  const [toggleHeart, setToggleHeart] = useState(false);
 

  // Get the random activity with axios
  const getRandomActivity = async () => {
    const response = await axios.get(
      `http://www.boredapi.com/api/activity?type=${typeActivity}`
    );
    setRandomActivity(response.data);
    console.log(typeActivity);
  };

  
  const handleTypeChange = (e) => setTypeActivity(e.target.value);
  const addFavorite = (e) => {
    // Change Color
    setToggleHeart(!toggleHeart);
    dispatch(addToFavorite({ id: randomActivity.key, activity: randomActivity.activity, check: false }));
  //    // get the state favoriteActivities from the store
  // const favoriteActivities = useSelector((state) => state.favoriteActivities);
  // console.log(favoriteActivities);
  //   // Add to local storage
  //   localStorage.setItem("favoriteActivities", favoriteActivities)
    
  };
  // Load Random activity
  useEffect(() => {
    getRandomActivity();
  }, [typeActivity]);
  return (
    <Card style={{ width: "18rem", height: "25%" }}>
      {randomActivity && (
        <Card.Body className="activityCard">
          <Card.Title>{randomActivity.activity} </Card.Title>
          <Card.Text>{randomActivity.type}</Card.Text>
          <RiHeart3Fill className="heart" className={
            toggleHeart ? 'heart active' : 'heart'
          } onClick = {addFavorite}/>
        </Card.Body>
      )}
      {/* Activity Types */}
      <Form.Select aria-label="Default select example"
         
          onChange={e => handleTypeChange(e)}>
        <option>Select Activity Type</option>
        <option value="education">Education</option>
        <option value="recreational">Recreational</option>
        <option value="social">Social</option>
        <option value="diy">Diy</option>
        <option value="charity">Charity</option>
        <option value="cooking">Cooking</option>
        <option value="relaxation">Relaxation</option>
        <option value="music">Music</option>
        <option value="busywork">Busywork</option>

      </Form.Select>
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
