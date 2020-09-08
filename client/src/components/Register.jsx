import React, { useState } from "react";

const Register = (props) => {
  const [inputs, setInputs] = useState({
    username:"",
    email: "",
    password: "",
  });

  //Managing register form
  const { username, email, password } = inputs; // <- This is just to use these variables without having to write inputs.email and inputs.password everytime
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const body = { username, email, password };
    try {
      const response = await fetch("/auth/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      console.log(parseRes);
    } catch (error) {
      console.error(error.message);
    }
  };

  //Managing modal
  const RegisterOpen = props.RegisterOpen;

  const Close = props.CloseRegister;

  const CloseRegister = () => {
    Close(!RegisterOpen);
  };

  return (
    <div>
      <div>
        <div className="modal">
          <div className="Login-modal">
            <button id="LoginbuttonClose" onClick={CloseRegister}>
              X
            </button>
            <form onSubmit={onSubmit}>
              <h2>Create an account</h2>
              <p>Already have an account? Sign In</p>

              <p>Enter your name</p>

              <input
                type="text"
                placeholder="Your name..."
                name="username"
                required
                value={username}
                onChange={(e) => onChange(e)}
              ></input>
              <p>Enter your email</p>

              <input
                type="email"
                placeholder="Email..."
                name="email"
                required
                value={email}
                onChange={(e) => onChange(e)}
              ></input>
              <p>Enter your password</p>
              <input
                type="password"
                placeholder="Password..."
                name="password"
                required
                value={password}
                onChange={(e) => onChange(e)}
              ></input>
              <button type="submit">Register</button>
              <p>
                By providing your email address, you agree to our Privacy Policy
                and Terms & Conditions
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
