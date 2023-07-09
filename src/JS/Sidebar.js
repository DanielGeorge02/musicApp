import React, { useState } from "react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { IoAddSharp } from "react-icons/io5";
import {
  BiSearchAlt2,
  BiSolidSearchAlt2,
  BiSolidPlaylist,
} from "react-icons/bi";
import Logo from "../image/logo.png";

const Sidebar = ({ show, setshow }) => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} width="200" height="100" alt="logo" />
      </div>

      <div className="icon">
        <AiFillHome size={20} />
        <h3>Home</h3>
      </div>
      <div className="icon" onClick={() => setshow(!show)}>
        <BiSearchAlt2 size={25} />
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
