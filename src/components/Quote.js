import classes from './Quote.module.css';
import Card from "../wrapers/Card";

function Quote(props) {
    return (
        <Card>
            <div className={classes.quote}>
                {props.statements.map((value) => {
                    if ('context' in value) {
                        return <p className={classes.context}>~ {value.context} ~</p>
                    } else {
                        return [<p className={classes.author}>{value.author}</p>,
                            <p className={classes.statement}>{value.statement}</p>]
                    }
                })}
                <p className={classes.created}>{props.created}</p>
            </div>
        </Card>
    );
}

export default Quote;