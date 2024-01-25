import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Tile } from "./tiles/Tile";
import { TileList } from "./tiles/TileList";
import axios from "axios";

function App() {
  const [value, setValue] = useState(1);

  return (
    <div className="App">
      <TileList />
    </div>
  );
}

export default App;
