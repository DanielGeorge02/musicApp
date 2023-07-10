import React from "react";
import "./App.css";
import Home from "./JS/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Song from "./JS/Song";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Home />} />
        <Route path="/:song" element={<Song />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
