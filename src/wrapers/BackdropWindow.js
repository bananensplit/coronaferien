import { CSSTransition } from "react-transition-group";
import classes from "./BackdropWindow.module.css";

function BackdropWindow(props) {
  const windowTrans = {
    enter: classes['window-trans-enter'],
    enterActive: classes['window-trans-enter-active'],
    exit: classes['window-trans-exit'],
    exitActive: classes['window-trans-exit-active'],
   };

  const backdropTrans = {
    enter: classes['backdrop-trans-enter'],
    enterActive: classes['backdrop-trans-enter-active'],
    exit: classes['backdrop-trans-exit'],
    exitActive: classes['backdrop-trans-exit-active'],
   };

  return (
    <div className={classes.container}>
      <CSSTransition
        in={props.state}
        classNames={backdropTrans}
        timeout={300}
        unmountOnExit
      >
        <div className={classes.backdrop} />
      </CSSTransition>
      <CSSTransition
        in={props.state}
        classNames={windowTrans}
        timeout={300}
        unmountOnExit
      >
        <div className={classes.window}>
          {props.children}
          {props.state && (
            <img
              className={classes.cancelbtn}
              onClick={() => props.setState(false)}
              src="/resources/close-icon.svg"
              alt="X"
            />
          )}
        </div>
      </CSSTransition>
    </div>
  );
}

export default BackdropWindow;
