import classes from "./Display.module.css";

function Display(props) {
  return <div className={classes.display}>{props.children}</div>;
}

export default Display;
