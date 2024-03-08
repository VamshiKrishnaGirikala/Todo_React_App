import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState({ name: "", done: false });
    function onSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({ name: "", done: false });
    }
    return (
        <form className={styles.todoForm} onSubmit={(e) => onSubmit(e)}>
            <div className={styles.inputContainer}>
                <input className={styles.modernInput} onChange={(e) => setTodo({ name: e.target.value,done:false })} type="text" value={todo.name} placeholder="Enter todo item..." />
            <button className={styles.modernButton} type="submit">Add</button>
            </div>            
        </form>
    );
}