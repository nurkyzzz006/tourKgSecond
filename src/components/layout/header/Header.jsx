import React, { useState } from "react";
import scss from "./Header.module.scss";
import { PiSignInBold } from "react-icons/pi";
import { FaMessage } from "react-icons/fa6";
import { IoIosHelpCircle } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { useAuth } from "../../../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import { IconButton, Menu, MenuItem } from "@mui/material";

const Header = () => {
  const { user, logOutUser } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header id={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.partOne}>
            <div className={scss.logo_top}>
              <FaMapMarkedAlt className={scss.logo} />
              <h1>N_515</h1>
            </div>
            <p onClick={() => navigate("/feed")}>Туристичиская компания</p>
            <div className={scss.h_icon}>
              <a onClick={() => navigate("/")} className={scss.icon_h0}>Home</a>

              <a
                onClick={() => navigate("/coment")}
                className={scss.icon_h2}
              >
                Coment
              </a>
              <IoIosHelpCircle
                onClick={() => navigate("/add")}
                className={scss.icon_h3}
              />
              {user ? (
                <>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={handleMenu} 
                  >
                    <img
                      className={scss.photo}
                      src={user.photoURL}
                      alt=""
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "100%",
                      }}
                    />
                  </IconButton>
                  <Menu
                    className={scss.menu_appBar}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <div className={scss.close} onClick={handleClose}>
                      <MenuItem onClick={() => logOutUser()}>Log Out</MenuItem>
                    </div>
                  </Menu>
                </>
              ) : (
                <>
                  <FaUserCircle onClick={() => navigate("/register")} />
                </>
              )}
              {/* {user ? <button>Log Out</button> : ""} */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
