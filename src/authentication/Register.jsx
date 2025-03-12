import React from "react";
import scss from "./Register.module.scss";
import { TextField } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div id={scss.register}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block}>
            <div className={scss.zag}>
              <h1>Login</h1>
              <span>|</span>
              <h1>Register</h1>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              similique quo vel abhhf Lorem ipsum dolor sit amet consectetur,
              adipisicing elit.
            </p>
            <div className={scss.login}>
              <TextField
                sx={{ heigth: "20px" }}
                id="outlined-basic"
                label="Mail@gmail.com"
                variant="outlined"
                className={scss.input}
              />
              <TextField
                style={{ heigth: "5px" }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                className={scss.input}
              />
              <button>login</button>
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
  );
};

export default Register;
