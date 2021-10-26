import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Switch stops further finding of routes if the route matches. */}
          <Route path="/" component="Home" exact></Route>
          <Route path="/jobs" component="Jobs" exact></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
