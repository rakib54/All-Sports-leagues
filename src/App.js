import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './Components/Nomatch/NoMatch';
import LeagueDetails from './Components/LeagueDetails/LeagueDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
            <Home/>
        </Route>
        <Route path="/league/:leagueId">
          <LeagueDetails/>
        </Route>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
