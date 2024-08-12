import { strict } from "assert";
import React, { useState } from "react";

interface IProps {
	taskName: string;
	index: number;
	deleteTask: (taskIndex: number) => void;
}

export default function Task(props: IProps) {
	function handleClick() {
		props.deleteTask(props.index)
	}

	function rename() {
		let inputPrompt = prompt("New name for your task:");
		let name = inputPrompt ? inputPrompt : "Name";
		setTaskName(name);
	}

	let [taskName, setTaskName] = useState(props.taskName);

	return (
		<div>
			<h1>{taskName}</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
				omnis.
			</p>
			<button onClick={handleClick}>Done</button>
			<button onClick={rename}>Rename</button>
		</div>
	);
}
