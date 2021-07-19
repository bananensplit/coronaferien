import WZName from "../components/WZName";
import Display from "../wrapers/Display";

function AllWzNames(props) {
    props.setPath('Warzonenamen');

    let wzNamesData = [];

    function createWZNames() {
        return wzNamesData.map(value => <WZName clantag={value.clantag} gamertag={value.gamertag}
                                                created={value.created}/>);
    }

    return <Display>{createWZNames()}</Display>;
}

export default AllWzNames;