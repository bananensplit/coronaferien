import classes from './HeaderBar.module.css';

function HeaderBar(props) {
    return (
        <div className={classes.headerbar}>
            <p className={classes.title}>{props.title}</p>
            <p className={classes.path}>{props.path}</p>
        </div>
    );
}

export default HeaderBar;