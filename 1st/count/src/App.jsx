import { memo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

let counter = 4;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Gym",
      description: "Go to Gym",
    },
    {
      id: 2,
      title: "gg",
      description: "Go ggg Gym",
    },
    {
      id: 3,
      title: "Gyhhm",
      description: "hhhh to Gym",
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: counter++,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>add todo</button>
      {todos.map((todo) => (
        <ToDo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function ToDo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}

export default App;
