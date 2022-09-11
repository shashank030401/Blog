import { useForkRef } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../Contexts/AuthContext";
import loginSVG from "../Images/login.svg";
import "../Styles/login.css";

export default function Login() {
  const { login, currentUser, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {}
  };

  useEffect(() => {
    if (currentUser !== null) {
      navigate("/admin");
    }
  }, [currentUser]);
  return (
    <div className="login">
    <div className="login-Header">
        <p>Admin Login</p>
    </div>
      <div className="loginCard">
        <div className="image">
          <img src={loginSVG} alt="Jobin Jacob Blog login" />
        </div>
        <form className="loginForm">
          <div className="credentials">
            <div className="email">
              <label>Enter Your Email</label>
              <input
                required
                type="text"
                placeholder="abc@mail.com"
                name="email"
                onChange={handleEmailChange}
              />
            </div>
            <div className="Password">
              <label>Enter Your Password</label>
              <input
                required
                type="password"
                placeholder="***"
                name="password"
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div>
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
