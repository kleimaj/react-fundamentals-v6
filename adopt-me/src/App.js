import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchParms from './SearchParams';
import Details from './Details';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Router>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParms />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
