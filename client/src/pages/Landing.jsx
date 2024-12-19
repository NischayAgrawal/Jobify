import React from "react";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Finding your next job can be a challenging process, but staying
            organized shouldn’t be. Jobify is a comprehensive job tracking tool
            designed to help you manage your job applications with ease. Keep
            track of job details, application statuses, interview dates, and
            follow-up reminders—all in one centralized platform. With secure
            authentication and cloud-based storage, your data stays safe and
            accessible from anywhere. Take control of your job search and
            streamline your career journey with Jobify.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn login-link">
            Login
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
