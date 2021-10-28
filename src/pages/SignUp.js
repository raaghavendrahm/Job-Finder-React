import React from 'react';

const SignUp = () => {
  // On Sign Up
  const onSignUp = () => {
    console.log('Signed Up Successfully!');
  };

  return (
    <div className="sign-up">
      <h1 className="title is-5">Sign Up</h1>
      <form>
        <input className="input" type="text" placeholder="Name" required />
        <input className="input" type="email" placeholder="Email Id" required />
        <input className="input" type="text" placeholder="Password" required />
        <input
          className="input"
          type="text"
          placeholder="Confirm Password"
          required
        />

        <button className="button is-primary" onClick={onSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
