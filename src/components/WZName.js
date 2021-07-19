import classes from './WZName.module.css';
import Card from "../wrapers/Card";

function WZName(props) {
    return (
        <Card>
            <div className={classes.wzname}>
                {props.clantag !== "" && (<span className={classes.clantag}>[{props.clantag}] </span>)}
                <span className={classes.gamertag}>{props.gamertag}</span>
                <p className={classes.created}>{props.created}</p>
            </div>
        </Card>
    );
}

export default WZName;