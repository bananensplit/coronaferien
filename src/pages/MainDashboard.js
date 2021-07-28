import Card from "../wrapers/Card";
import { Link } from "react-router-dom";
import classes from "./MainDashboard.module.css";

function MainDashboard(props) {
  props.setPath("Welcome");
  props.setBackto(null);

  return (
    <div className={classes.dasboard}>
      <Link to="/quotes" className={classes.link}>
        <Card>
          <p className={classes.title}>Zitate</p>
          <p className={classes.description}>
            Eine Bibliothek mit endlosen Regalen, unzählbar vielen Weisheiten
            und noch mehr Lügen.
            <br />
            Die Zitate einer kleinen Gruppe an Freunden...
          </p>
        </Card>
      </Link>
      <Link to="/wznames" className={classes.link}>
        <Card>
          <p className={classes.title}>Warzonenamen</p>
          <p className={classes.description}>
            Die zahlreichen Personen die uns während unserer Reise durch das
            Internet begegnet sind.
          </p>
        </Card>
      </Link>
    </div>
  );
}

export default MainDashboard;
