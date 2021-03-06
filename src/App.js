import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';

function App() {
  return (
    <div className="App container">
      <Router>
        <Navbar></Navbar>
        <Switch>
          {/* Switch stops further finding of routes if the route matches. */}
          <Route path="/" component={Home} exact></Route>
          <Route path="/jobs" component={Jobs} exact></Route>
          <Route path="/signup" component={SignUp} exact></Route>
          <Route path="/login" component={LogIn} exact></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
