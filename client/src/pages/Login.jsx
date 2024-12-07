import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow
          type="email"
          name="email"
          defaultValue="john@gmail.com"
        ></FormRow>
        <FormRow
          type="password"
          name="password"
          defaultValue="secret123"
        ></FormRow>
        <button type="submit" className="btn btn-block">
          Submit
        </button>

        {/* ------IT WAS AN SELF ATTEMPT------ */}
        <button type="button" className="btn btn-block">
          <Link to="/dashboard">Explore The App</Link>
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
