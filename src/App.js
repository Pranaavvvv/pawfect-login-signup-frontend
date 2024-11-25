import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import bgVideo from "./bg.mp4";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const toggleContainer = () => {
    setIsActive(!isActive);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  const handleLogin = async () => {
    try {
      const { email, password } = formData;
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.error || "Login failed!");
    }
  };

  return (
    <div className="app">
      <video className="background-video" autoPlay loop muted preload="auto">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`container ${isActive ? "active" : ""}`} id="container">
        {/* Sign Up Form */}
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon" onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon icon={faGooglePlusG} />
              </a>
              <a href="#" className="icon" onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="icon" onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="icon" onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
            <button type="button" onClick={handleRegister}>
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon" onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon icon={faGooglePlusG} />
              </a>
              <a href="#" className="icon" onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="icon" onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="icon" onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <span>or use your email and password</span>
            <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
            <a href="#">Forgot Your Password?</a>
            <button type="button" onClick={handleLogin}>
              Sign In
            </button>
          </form>
        </div>

        {/* Toggle Panel */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of the site's features.</p>
              <button className="hidden" id="login" onClick={toggleContainer}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of the site's features.</p>
              <button className="hidden" id="register" onClick={toggleContainer}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
