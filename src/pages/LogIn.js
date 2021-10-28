const LogIn = () => {
  // On Log In
  const onLogIn = () => {
    console.log('Logged In Successfully!');
  };

  return (
    <div className="log-in">
      <form>
        <input className="input" type="email" placeholder="Email Id" required />
        <input className="input" type="text" placeholder="Password" required />

        <button className="button is-primary" onClick={onLogIn}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
