import React, { useState } from "react";
import scss from "./Login.module.scss";
import { Alert, TextField } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {  signInWithGoogle, logIn } = useAuth();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  return (
    <div>
      <div id={scss.login}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.block}>
              <div className={scss.zag}>
                <h1>Login</h1>
                <span>|</span>
                <h1 onClick={() => navigate("/register")}>Register</h1>
              </div>
              
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                similique quo vel abhhf Lorem ipsum dolor sit amet consectetur,
                adipisicing elit.
              </p>
              <div className={scss.login}>
                <TextField
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ heigth: "20px" }}
                  id="outlined-basic"
                  label="Mail@gmail.com"
                  variant="outlined"
                  className={scss.input}
                />
                <TextField
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ heigth: "5px" }}
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  className={scss.input}
                />
                <button onClick={() => logIn(email, password)}>Login</button>
              </div>

              <div className={scss.withGoogle}>
                <div className={scss.line}>
                  <div className={scss.lines}></div>
                  <p>or</p>
                  <div className={scss.lines}></div>
                </div>
                <button onClick={() => signInWithGoogle()}>
                  <FaGoogle className={scss.google} />
                  Continue with Google
                </button>
                <button>
                  <FaFacebookF className={scss.facebook} />
                  Continue with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
