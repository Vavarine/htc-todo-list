import { useState } from "react";
import NewTodo from "./components/NewTodo/Index";

import styles from "./todo.module.css";
import TodoList from "./components/TodoList/Index";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(function () {
    const todos = localStorage.getItem("todos");
    if (todos) {
      setTodos(JSON.parse(todos));
    }
  }, []);

  useEffect(
    function () {
      localStorage.setItem("todos", JSON.stringify(todos));
    },
    [todos]
  );

  function handleNewTodo(text) {
    const newTodo = {
      value: text,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
  }

  return (
    <div className={styles.container}>
      <NewTodo onNewTodo={handleNewTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
