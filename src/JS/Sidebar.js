import React from "react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { IoAddSharp } from "react-icons/io5";
import {
  BiSearchAlt2,
  BiSolidSearchAlt2,
  BiSolidPlaylist,
} from "react-icons/bi";
import Logo from "../image/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ show, setshow }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} width="200" height="100" alt="logo" />
      </div>

      <div className="icon" onClick={() => navigate("/")}>
        {location.pathname === "/" ? (
          <AiFillHome size={25} />
        ) : (
          <AiOutlineHome size={25} />
        )}
        <h3>Home</h3>
      </div>
      <div
        className="icon"
        onClick={() => {
          navigate("/search");
          setshow(!show);
        }}
      >
        {location.pathname === "/search" ? (
          <BiSolidSearchAlt2 size={25} />
        ) : (
          <BiSearchAlt2 size={25} />
        )}
        <h3>Search</h3>
      </div>

      <div className="icon">
        <div>
          <BiSolidPlaylist size={25} />
          <h3>Playlist</h3>
        </div>
        <IoAddSharp size={25} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Sidebar;
