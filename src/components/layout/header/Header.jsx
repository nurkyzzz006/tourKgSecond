import React from "react";
import scss from "./Header.module.scss";
import { PiSignInBold } from "react-icons/pi";
import { FaMessage } from "react-icons/fa6";
import { IoIosHelpCircle } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { useAuth } from "../../../context/AuthContext";

const Header = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <header id={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.partOne}>
            <div className={scss.logo_top}>
              <FaMapMarkedAlt className={scss.logo} />
              <h1>N_515</h1>
            </div>
            <p>Туристичиская компания</p>
            <div className={scss.h_icon}>
              <GrHomeRounded
                onClick={() => navigate("/")}
                className={scss.icon_h0}
              />
              <FaMessage className={scss.icon_h2} />
              <IoIosHelpCircle className={scss.icon_h3} />
              {user ? (
                <img
                  src={user.photoURL}
                  alt=""
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%",
                  }}
                />
              ) : (
                <PiSignInBold
                  onClick={() => navigate("/register")}
                  className={scss.icon_h1}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
