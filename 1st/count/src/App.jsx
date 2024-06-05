import { memo, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
      });
    }, 5000);
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <ToDo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function ToDo({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <h5>{description}</h5>
    </div>
  );
}

export default App;
