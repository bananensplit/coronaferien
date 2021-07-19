import {Route, Switch} from 'react-router-dom';
import {useState} from 'react';
import MainDashboard from "./pages/MainDashboard";
import AllWzNames from "./pages/AllWzNames";
import AllQuotes from "./pages/AllQuotes";
import HeaderBar from "./components/HeaderBar";

function App() {


    // function createQuotes() {
    //     return quotesData.map(value => <Quote statements={value.statements} created={value.created}/>);
    // }

    // function createWZNames() {
    //     return wzNamesData.map(value => <WZName clantag={value.clantag} gamertag={value.gamertag}
    //                                             created={value.created}/>);
    // }

    // return [
    //     <HeaderBar title="Coronaferien"/>,
    //     <div className="dashboard">
    //         <p className="header">Quotes</p>
    //         <p className="header">Warzone Namen</p>
    //         <Display>
    //             {createQuotes()}
    //         </Display>
    //         <Display>
    //             {createWZNames()}
    //         </Display>
    //     </div>
    // ];

    const [path, setPath] = useState('Welcome');

    return <div>
        <HeaderBar title="Coronaferien" path={path}/>
        <Switch>
            <Route path='/' exact={true}>
                <MainDashboard setPath={setPath}/>
            </Route>
            <Route path='/wznames' exact={true}>
                <AllWzNames setPath={setPath}/>
            </Route>
            <Route path='/quotes' exact={true}>
                <AllQuotes setPath={setPath}/>
            </Route>
        </Switch>
    </div>;
}

export default App;
