import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [ID, setID] = useState(5);

  return (
    <div>
      <button
        onClick={() => {
          setID(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setID(2);
        }}
      >
        2
      </button>
      <button>3</button>
      <button>4</button>
      <Todo id={ID} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id).then(async function (
      res
    ) {
      const json = await res.json();
      setTodo(json.todo);
      console.log(id);
    });
  }, [id]);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}
export default App;
