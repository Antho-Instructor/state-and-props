import { useState } from "react";
import Task from "./Task";
function TaskList() {
	const [tasks, setTasks] = useState([
		{ name: "Faire les courses", completed: false },
		{ name: "Appeler le médecin", completed: true },
		{ name: "Faire du sport", completed: false },
	]);

	const toggleTaskCompletion = (index) => {
		const newTasks = [...tasks];
		newTasks[index].completed = !newTasks[index].completed;
		setTasks(newTasks);
	};

	const addTask = (taskName) => {
		if (taskName.trim() !== "") {
			setTasks([...tasks, { name: taskName, completed: false }]);
		}
	};

	const deleteTask = (index) => {
		const newTasks = [...tasks];
		newTasks.splice(index, 1);
		setTasks(newTasks);
	};

	return (
		<div>
			<h2>Liste de tâches</h2>
			{tasks.map((task, index) => (
				<div key={index}>
					<Task
						taskName={task.name}
						isCompleted={task.completed}
						onClick={() => toggleTaskCompletion(index)}
					/>
					<button onClick={() => deleteTask(index)}>Supprimer</button>
				</div>
			))}
			<form
				onSubmit={(e) => {
					e.preventDefault();
					const taskName = e.target.elements.taskName.value;
					addTask(taskName);
					e.target.elements.taskName.value = "";
				}}
			>
				<input
					type="text"
					name="taskName"
					placeholder="Nouvelle tâche"
				/>
				<button type="submit">Ajouter</button>
			</form>
		</div>
	);
}

export default TaskList;
