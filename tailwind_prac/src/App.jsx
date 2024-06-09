import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ backgroundColor: "yellow" }}>hi</div>
        <div>hi</div>
        <div style={{ backgroundColor: "yellow" }}>hi</div>
        <div>hi</div>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <div className="bg-orange-700">hi</div>
        <div>hi</div>
        <div className="bg-orange-700">hi</div>
        <div>hi</div>
      </div>
    </>
  );
}

export default App;
