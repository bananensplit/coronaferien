import { Link } from "react-router-dom";
import classes from "./HeaderBar.module.css";

function HeaderBar(props) {
  return (
    <div className={classes.headerbar}>
      <p className={classes.title}>{props.title}</p>
      <p className={classes.path}>{props.path}</p>
      {props.backto !== null && (
        <Link to={props.backto} className={classes.back}>
          <img src="/resources/back-icon.svg" alt="Back" />
        </Link>
      )}
    </div>
  );
}

export default HeaderBar;
