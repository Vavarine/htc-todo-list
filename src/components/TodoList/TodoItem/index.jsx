import { FiSquare, FiCheckSquare, FiTrash2 } from "react-icons/fi";
import styles from "./styles.module.css";

function TodoItem({ todo, onDoneClick, onRemoveClick }) {
  return (
    <li className={`${styles.container} ${todo.isDone ? styles.checked : ""}`}>
      <button className={styles.check} onClick={() => onDoneClick()}>
        {todo.isDone ? <FiCheckSquare size={20} /> : <FiSquare size={20} />}
      </button>
      <span className={styles.text}>{todo.value}</span>
      <button className={styles.remove} onClick={() => onRemoveClick()}>
        <FiTrash2 size={20} />
      </button>
    </li>
  );
}

export default TodoItem;
