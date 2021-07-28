import { Link } from "react-router-dom";
import classes from "./AddButton.module.css";

function AddButton(props) {
  return (
    <Link to={props.forwardTo} className={classes.addbtn}>
      <img
        src="/resources/add-icon.svg"
        alt="+"
        className={classes.addbtnimg}
      />
    </Link>
  );
}

export default AddButton;
