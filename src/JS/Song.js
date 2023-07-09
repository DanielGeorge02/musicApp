import React, { useEffect, useState } from "react";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { MdFavoriteBorder } from "react-icons/md";
import "../CSS/Song.css";
import play from "../image/play-button.png";
import pause from "../image/pause.png";
import Tooltip from "@mui/material/Tooltip";

const Song = () => {
  const [song, setSong] = useState();
  const [audio, setaudio] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

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
  var secd = song?.duration % 60; //234
  var seconds = Math.floor(s) + ":" + secd;

  return (
    <div className="song">
      <div className="sidebar"></div>
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
