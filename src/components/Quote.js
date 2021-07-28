import { useState } from "react";
import classes from "./Quote.module.css";
import Card from "../wrapers/Card";
import BackdropWindow from "../wrapers/BackdropWindow";

function Quote(props) {
  const [showDetails, setShowDetails] = useState(false);

  function createQuote() {
    return (
      <div className={classes.quote} onClick={() => setShowDetails(true)}>
        {props.statements.map((value) => {
          if ("context" in value) {
            return <p className={classes.context}>~ {value.context} ~</p>;
          } else {
            return [
              <p className={classes.author}>{value.author}</p>,
              <p className={classes.statement}>{value.statement}</p>,
            ];
          }
        })}
        <p className={classes.created}>{props.created}</p>
      </div>
    );
  }

  return (
    <Card>
      {createQuote()}
      <BackdropWindow state={showDetails} setState={setShowDetails}>
        {createQuote()}
      </BackdropWindow>
    </Card>
  );
}

export default Quote;
