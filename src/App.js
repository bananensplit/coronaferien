import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import MainDashboard from "./pages/MainDashboard";
import AllWzNames from "./pages/AllWzNames";
import AddWzName from "./pages/AddWzName";
import AllQuotes from "./pages/AllQuotes";
import HeaderBar from "./components/HeaderBar";

function App() {
  const [path, setPath] = useState("Welcome");
  const [backto, setBackto] = useState(null);

  return (
    <div>
      <HeaderBar title="Coronaferien" path={path} backto={backto} />
      <Switch>
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
    </div>
  );
}

export default App;
