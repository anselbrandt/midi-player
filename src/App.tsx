import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ElectricPiano } from "smplr";

function App() {
  const audioRef = useRef<AudioContext>();
  const epianoRef = useRef<ElectricPiano>();
  const [isInit, setIsInit] = useState(false);

  const handleInit = () => {
    if (audioRef.current) return;
    audioRef.current = new AudioContext();
    epianoRef.current = new ElectricPiano(new AudioContext(), {
      instrument: "PianetT",
    });
    setIsInit(true);
  };

  const handleTest = () => {
    if (!epianoRef.current) return;
    epianoRef.current.start({ note: "C4" });
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react spin" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className={isInit ? "green" : ""} onClick={handleInit}>
          Init
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button className={isInit ? "green" : ""} onClick={handleTest}>
          Test
        </button>
      </div>
      <p className="muted">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
