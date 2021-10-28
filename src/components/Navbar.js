import { Link } from 'react-router-dom';

const Navbar = () => {
  // Sign Up
  const signUp = () => {
    console.log('signup');
  };

  // Login
  const logIn = () => {
    console.log('login');
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          JOB FINDER
        </Link>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>

          <Link to="/jobs" className="navbar-item">
            Jobs
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary" onClick={signUp}>
                <strong>Sign up</strong>
              </a>
              <a className="button is-light" onClick={logIn}>
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
