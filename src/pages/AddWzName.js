import MyTextInput from "../components/MyTextInput";
import classes from "./AddWzName.module.css";
import { useRef } from "react";

function AddWzName(props) {
  props.setPath("Warzonenamen / Neuer Name");
  props.setBackto("/wznames");

  const gamertagInput = useRef(null);
  const clantagInput = useRef(null);
  const createdInput = useRef(null);

  function submitHandler(event) {
    console.log("Submitted");
  }

  return (
    <div className={classes.background}>
      <p className={classes.title}>Create Warzonename</p>
      <div className={classes.container}>
        <MyTextInput
          ref={gamertagInput}
          id="gamertag"
          label="Gamertag"
          pattern="[a-zA-Z0-9]+"
        />
        <MyTextInput
          ref={clantagInput}
          id="clantag"
          label="Clantag"
          pattern="[a-zA-Z0-9]+"
        />
        <div>
          <label for="created" className={classes.label}>
            Sichtung:{" "}
          </label>
          <input
            className={classes.input}
            ref={createdInput}
            type="date"
            id="created"
            name="created"
          />
        </div>
        <button
          type="submit"
          onSubmit={submitHandler}
          className={classes.submitbtn}
        >
          Neuen Namen erstellen!
        </button>
      </div>
    </div>
  );
}

export default AddWzName;
