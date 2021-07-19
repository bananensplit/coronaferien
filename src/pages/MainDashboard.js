import Card from "../wrapers/Card";
import {Link} from "react-router-dom";
import classes from "./MainDashboard.module.css";

function MainDashboard(props) {
    props.setPath('Welcome');
    return <div className={classes.dasboard}>
        <Link to='/quotes' className={classes.link}>
            <Card>
                <p className={classes.title}>Alle Zitate</p>
                <p className={classes.description}>
                    Wenn sie hier klicken, kommen sie zur unerforschten Bibliothek der
                    Zitate von einer kleinen Gruppe an Freunden. Die meisten Aussagen werden sie zum Lachen bringen und
                    Ihnen Freude verschaffen. Doch seien Sie gewarnt: Diese Zitate können Ihnen auch den Boden unter den
                    Füßen wegreisen!
                </p>
            </Card>
        </Link>
        <Link to='/wznames' className={classes.link}>
            <Card>
                <p className={classes.title}>
                    Alle Warzonenamen
                </p>
                <p className={classes.description}>
                    Die zahlreichen Personen die uns während unserer Reise durch das Internet begegnet sind.
                </p>
            </Card>
        </Link>
    </div>
}

export default MainDashboard;