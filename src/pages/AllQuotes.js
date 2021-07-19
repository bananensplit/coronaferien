import Quote from "../components/Quote";
import Display from "../wrapers/Display";

function AllQuotes(props) {
    props.setPath('Zitate');

    let quotesData = [];

    function createQuotes() {
        // return quotesData.map(value => <Quote statements={value.statements} created={value.created}/>);
        return <Quote statements={quotesData[0].statements} created={quotesData[0].created}/>;
    }

    return <Display>{createQuotes()}</Display>;
}

export default AllQuotes;