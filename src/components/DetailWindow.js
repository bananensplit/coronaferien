import classes from "./DetailWindow.module.css";

function DetailWindow(props) {
    return <div>
        <div className={classes.backdrop}/>
        <div className={classes.window}>
            {/*<button className={classes.btn} onClick={props.closeWindow()}>X</button>*/}
            <button className={classes.btn} onClick={props.hideWindow()}>X</button>
            <div>Content</div>
        </div>
    </div>;
}

export default DetailWindow;