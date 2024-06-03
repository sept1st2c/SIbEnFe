import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("Shubh");

  function updateName() {
    setName("the " + Math.random());
  }

  return (
    <>
      <button onClick={updateName}>Click</button>
      <Header title={name}></Header>
      <Header title={"ola hu"}></Header>
    </>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
