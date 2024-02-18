function Task({ taskName, isCompleted, onClick }) {
	return (
		<div
			className="task"
			onClick={onClick}
			style={{
				textDecoration: isCompleted ? "line-through" : "none",
			}}
		>
			{taskName}
		</div>
	);
}

export default Task;
