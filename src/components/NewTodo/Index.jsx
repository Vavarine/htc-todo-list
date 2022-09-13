import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import styles from "./styles.module.css";

function NewTodo({ onNewTodo }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (text === "") return;

    onNewTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="text"
        className={styles.input}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button type="submit" className={styles.submit}>
        <FiPlus size={26} color="#fff" />
      </button>
    </form>
  );
}

export default NewTodo;
