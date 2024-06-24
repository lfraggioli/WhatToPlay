import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GamePicker from "./components/GamePicker";

function App() {
  return (
    <>
      <div className="App font-body flex flex-col text-slate-300 font-bold">
        <h1>Game Picker</h1>
        <h3>A helpful tool for when I don't know what to play</h3>
        <GamePicker />
      </div>
    </>
  );
}

export default App;
