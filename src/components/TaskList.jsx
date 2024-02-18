import { useState } from "react";
import Task from "./Task";
function TaskList() {
	const [tasks, setTasks] = useState([
		{ name: "Faire les courses", completed: false },
		{ name: "Appeler le médecin", completed: true },
		{ name: "Faire du sport", completed: false },
	]);

	return (
		<div>
			<h2>Liste de tâches</h2>
			{tasks.map((task, index) => (
				<div key={index}>
					<Task taskName={task.name} isCompleted={task.completed} />
				</div>
			))}
		</div>
	);
}

export default TaskList;
