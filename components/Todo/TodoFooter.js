import Link from "next/link";
import styles from "../../styles/TodoStyles/TodoFooter.module.css";

function TodoFooter({ numberOfIncompleteTasks }) {
	return (
		<div className={styles.todoFooter}>
			<p>
				{numberOfIncompleteTasks}{" "}
				{numberOfIncompleteTasks === 1 ? "task" : "tasks"} left
			</p>
			{/*<Link href="/followers">Followers</Link>*/}
		</div>
	);
}

export default TodoFooter;