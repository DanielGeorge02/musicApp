import React from "react";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { BiSearch } from "react-icons/bi";
import { Divider, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

const Navbar = ({ show, search, onchangeHandler, container }) => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="navbar-search">
        {show ? (
          <div>
            <div className="search">
              <TextField
                variant="outlined"
                placeholder="What do you want to listen?"
                type="text"
                value={search}
                onChange={onchangeHandler}
                InputProps={{
                  style: {
                    color: "white",
                    fontWeight: "600",
                    height: "40px",
                    width: "100%",
                    fontSize: "15px",
                    borderRadius: "20px",
                    borderColor: "white",
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <BiSearch />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="content">
              {container?.map((item) => {
                return (
                  <div
                    className="suggestion"
                    onClick={() => {
                      localStorage.setItem("song", JSON.stringify(item));
                      navigate(`/${item.id}`);
                    }}
                  >
                    <div className="title">
                      <p key={item.title}>{item.title}</p>
                    </div>
                    <div className="song-img">
                      <img
                        key={item.artist.picture_small}
                        src={item.artist.picture_small}
                        alt=""
                      />
                    </div>
                    <Divider />
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
      <div className="avatar">
        <Tooltip title="Profile">
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            sx={{ width: 55, height: 55 }}
            style={{ cursor: "pointer" }}
          />
        </Tooltip>
      </div>
    </nav>
  );
};

export default Navbar;
