import styles from "./todoitem.module.css";
export default function TodoItem(props) {
    const { item, todos, setTodos } = props;
    function handleDelete(item) {
        setTodos(todos.filter(todo => todo.name !== item.name));
    }
    function handleComplete(item) {
       const updatedTodos = todos.map(todo => todo.name === item.name ? { ...todo, done: !todo.done } : todo);
        setTodos(updatedTodos);
    }
    return (<div className={styles.item}>
        <div className={styles.itemName}><span className={item.done?styles.completed:""} onClick={() => handleComplete(item)}>{item.name}</span><span><button onClick={() => handleDelete(item)} className={styles.deleteButton}>X</button></span></div>
        <hr className={styles.line} />
    </div>)
}