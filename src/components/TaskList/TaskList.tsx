import React, { useState } from "react";
import Task from "../Task/Task";

export default function TaskList() {
	function deleteTask(taskIndex: number) {
		let newTaskList = taskList.filter((value, index) => {
			return index != taskIndex;
		});
		setTaskList(newTaskList);
	}
	let [taskList, setTaskList] = useState([
		"Shopping",
		"Coffee break",
		"Coding",
		"Date",
		"Sleep",
	]);
	return (
		<div>
			{/* перебор списка методом мап */}
			{taskList.map((value, index) => {
				return (
					<Task
						taskName={value}
						index={index}
						deleteTask={deleteTask}
						key={Math.random()}
					/>
				);
			})}
			<br />
			<br />

			<button
				onClick={() => {
					let newTask = prompt("Add new task:", "name");
					setTaskList([...taskList, newTask ? newTask : "Name"]);
				}}
			>
				Add new task
			</button>
		</div>
	);
}
