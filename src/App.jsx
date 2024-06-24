import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GamePicker from "./components/GamePicker";

function App() {
  return (
    <>
      <div className="App flex flex-col text-slate-300 font-bold">
        <h1>Game Picker</h1>
        <GamePicker />
      </div>
    </>
  );
}

export default App;
