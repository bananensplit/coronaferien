import { Route, Switch, useLocation } from "react-router-dom";
import { useState } from "react";
import MainDashboard from "./pages/MainDashboard";
import AllWzNames from "./pages/AllWzNames";
import AddWzName from "./pages/AddWzName";
import AllQuotes from "./pages/AllQuotes";
import HeaderBar from "./components/HeaderBar";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import classes from "./PageTransition.module.css";

function App() {
  const [path, setPath] = useState("Welcome");
  const [backto, setBackto] = useState(null);

  let location = useLocation();

  const transitionClasses = {
    enter: classes["changepage-enter"],
    enterActive: classes["changepage-enter-active"],
    exit: classes["changepage-exit"],
    exitActive: classes["changepage-exit-active"],
  };

  return (
    <div>
      <HeaderBar title="Coronaferien" path={path} backto={backto} />
      <TransitionGroup>
        <CSSTransition
          timeout={300}
          classNames={transitionClasses}
          key={location.key}
        >
          <Switch location={location}>
            <Route path="/" exact={true}>
              <MainDashboard setPath={setPath} setBackto={setBackto} />
            </Route>
            <Route path="/wznames" exact={true}>
              <AllWzNames setPath={setPath} setBackto={setBackto} />
            </Route>
            <Route path="/quotes" exact={true}>
              <AllQuotes setPath={setPath} setBackto={setBackto} />
            </Route>
            <Route path="/addwzname" exact={true}>
              <AddWzName setPath={setPath} setBackto={setBackto} />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
