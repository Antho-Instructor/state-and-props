function Task({ taskName, isCompleted }) {
	return (
		<div className="task">
			<p
				style={{
					textDecoration: isCompleted ? "line-through" : "none",
				}}
			>
				{taskName}
			</p>
		</div>
	);
}

export default Task;
