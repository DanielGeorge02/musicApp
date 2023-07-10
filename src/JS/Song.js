import React, { useEffect, useState } from "react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { IoAddSharp } from "react-icons/io5";
import {
  BiSearchAlt2,
  BiSolidSearchAlt2,
  BiSolidPlaylist,
} from "react-icons/bi";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { MdFavoriteBorder } from "react-icons/md";
import "../CSS/Song.css";
import play from "../image/play-button.png";
import pause from "../image/pause.png";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate, useLocation } from "react-router-dom";

const Song = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [song, setSong] = useState();
  const [audio, setaudio] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSidebarAVisible, setSidebarAVisible] = useState(true);
  const [isSidebarBVisible, setSidebarBVisible] = useState(false);

  const handleSidebarAClose = () => {
    setSidebarAVisible(false);
    setSidebarBVisible(true);
  };

  const handleSidebarBClose = () => {
    setSidebarAVisible(true);
    setSidebarBVisible(false);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("song"));
    setSong(data);
    setaudio(new Audio(data?.preview));
    console.log(data.preview);
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  var s = song?.duration / 60;
  var secd = song?.duration % 60;
  var seconds = Math.floor(s) + ":" + secd;

  return (
    <div className="song">
      {isSidebarAVisible && (
        <div className="sidebar1">
          <div className="close">
            <CloseIcon
              style={{ color: "white", float: "right", margin: "10px" }}
              onClick={handleSidebarAClose}
            />
          </div>

          <div className="icons">
            <AiFillHome size={20} />
            <h3>Home</h3>
          </div>
          <div
            className="icons"
            onClick={() => {
              localStorage.setItem("show", JSON.stringify(true));
              navigate(-1);
            }}
          >
            <BiSearchAlt2 size={25} />
            <h3>Search</h3>
          </div>

          <div className="icons">
            <div>
              <BiSolidPlaylist size={25} />
              <h3>Playlist</h3>
            </div>
            <IoAddSharp size={25} style={{ cursor: "pointer" }} />
          </div>
        </div>
      )}
      {isSidebarBVisible && (
        <div className="sidebar2">
          <div className="menu">
            <MenuIcon
              style={{ fontSize: "30px" }}
              onClick={handleSidebarBClose}
            />
          </div>
          <div className="menu" onClick={() => navigate("/")}>
            <Tooltip title="Home">
              <AiOutlineHome size={25} />
            </Tooltip>
          </div>
          <div
            className="menu"
            onClick={() => {
              navigate("/search");
            }}
          >
            <Tooltip title="Search">
              <BiSearchAlt2 size={25} />
            </Tooltip>
          </div>

          <div className="menu">
            <Tooltip title="Expand Your Library">
              <BiSolidPlaylist size={25} />
            </Tooltip>
          </div>
        </div>
      )}

      <div className="song-det">
        <nav>
          <div className="navbar-search"></div>
        </nav>
        <div className="det1">
          <div className="song-image">
            <img
              key={song?.album.cover_medium}
              src={song?.album.cover_medium}
              alt=" "
            />
          </div>
          <div className="desc">
            <h4>Song</h4>
            <h1 key={song?.title}>{song?.title}</h1>
            <div className="desc-art">
              <img src={song?.artist.picture_small} alt="" />
              <h5 style={{ fontWeight: "900" }}>{song?.artist.name}</h5> •
              <h5> {song?.album.title}</h5> •<h5>{seconds} </h5>
            </div>
          </div>
        </div>
        <div className="det2">
          <div className="more">
            {isPlaying === false ? (
              <Tooltip title="Play">
                <img
                  src={play}
                  height={60}
                  style={{ cursor: "pointer" }}
                  alt=""
                />
              </Tooltip>
            ) : (
              <Tooltip title="Pause">
                <img
                  src={pause}
                  height={70}
                  style={{ cursor: "pointer" }}
                  alt=""
                />
              </Tooltip>
            )}

            <MdFavoriteBorder
              size={40}
              style={{ cursor: "pointer", color: "white" }}
            />
          </div>

          <div className="artist">
            <img
              src={song?.artist.picture_medium}
              style={{
                borderRadius: "50%",
                height: "100px",
                marginRight: "20px",
              }}
              alt=""
            />
            <div className="art-det">
              <h4>Artist</h4>
              <h4>{song?.artist.name}</h4>
            </div>
          </div>
          <div className="audio">
            <AudioPlayer src={song?.preview} autoPlay={togglePlay} controls />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Song;
