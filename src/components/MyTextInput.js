import classes from "./MyTextInput.module.css";

function MyTextInput(props) {
  return (
    <div class={classes.container}>
      <input
        ref={props.ref}
        className={classes.input}
        type="text"
        id={props.id}
        name={props.id}
        placeholder=" "
        pattern={props.pattern}
      />
      <label className={classes.label} for={props.id}>
        {props.label}
      </label>
      <div className={classes.bar} />
      <div className={classes.failbar} />
    </div>
  );
}

export default MyTextInput;
