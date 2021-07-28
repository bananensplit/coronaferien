import { useState } from "react";
import classes from "./WZName.module.css";
import Card from "../wrapers/Card";
import BackdropWindow from "../wrapers/BackdropWindow";

function WZName(props) {
  const [showDetails, setShowDetails] = useState(false);

  function createWZName() {
    return (
      <div className={classes.wzname} onClick={() => setShowDetails(true)}>
        {props.clantag !== "" && (
          <span className={classes.clantag}>[{props.clantag}] </span>
        )}
        <span className={classes.gamertag}>{props.gamertag}</span>
        <p className={classes.created}>{props.created}</p>
      </div>
    );
  }

  return (
    <Card>
      {createWZName()}
      <BackdropWindow state={showDetails} setState={setShowDetails}>
        {createWZName()}
      </BackdropWindow>
    </Card>
  );
}

export default WZName;
