import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [userType, setUserType] = useState("student"); // Default user type
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isSignup
      ? "http://localhost:5000/api/signup"
      : "http://localhost:5000/api/signin";

    try {
      // const requestData = isSignup
      //   ? { email, password, userType }
      //   : { email, password };

      const response = await axios.post(endpoint, {
        email,
        password,
        userType,
      });

      console.log(response.data); // Debugging response data
      alert(response.data.message);

      if (response.status === 200) {
        //alert(response.data.message);

        if (rememberMe) {
          localStorage.setItem("user", JSON.stringify({ email, userType }));
        }

        // Redirect to respective dashboards
        if (userType === "admin") navigate("/admin-dashboard");
        else if (userType === "trainer") navigate("/trainer-dashboard");
        else navigate("/student-dashboard");
      }
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      alert(error.response?.data?.error || "Authentication Failed");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google"; // Replace with your backend auth route
  };

  const handleLinkedInLogin = () => {
    window.location.href = "http://localhost:5000/auth/linkedin"; // Replace with your backend auth route
  };

  return (
    <div className="auth-container">
      <div className="left-section">
        <h1>Mackinlay Learning Hub</h1>
        <h2>Upgrade Your Skills with Mackinlay</h2>
        <ul>
          <li>HR</li>
          <li>Sales</li>
          <li>Marketing</li>
          <li>Finance</li>
          <li>Business Analytics</li>
          <li>Live Interactive Sessions</li>
          <li>Placement Support & Certification</li>
        </ul>
        <button onClick={() => setIsSignup(false)}>Explore Programs</button>
      </div>
      <div className="right-section">
        <h2>{isSignup ? "Sign Up" : "Sign In"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
            >
              <option value="student">Student</option>
              <option value="trainer">Trainer</option>
              <option value="admin">Admin</option>
            </select>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!isSignup && (
            <div className="remember-forgot">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember Me
              </label>
              <button type="button" className="forgot-password">
                Forgot Password?
              </button>
            </div>
          )}
          <button type="submit">{isSignup ? "Sign Up" : "Sign In"}</button>
        </form>
        <div className="social-login">
          <button onClick={handleGoogleLogin} className="google-login">
            Sign in with Google
          </button>
          <button onClick={handleLinkedInLogin} className="linkedin-login">
            Sign in with LinkedIn
          </button>
        </div>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
