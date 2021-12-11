import {useState} from 'react'
import styles from "../styles/AddInput.module.css";
import { v4 } from "uuid"

function AddInput({ setTodos, todos }) {

	const [todo, setTodo] = useState("")

	const addTodo = () => {
		let updatedTodos = [
			...todos,
			{
				id: v4(),
				task: todo,
				completed: false
			}
		]
		setTodos(updatedTodos);
		setTodo("")
	}

	return (
		<div className={styles.inputContainer}>
			<input
				className={styles.input}
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				placeholder="Add a new task here..."
			/>
			<button className={styles.addBtn} onClick={addTodo}>
				Add
			</button>
		</div>
	)
}

export default AddInput
