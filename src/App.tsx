import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Task from "./components/Task/Task";
import TaskList from "./components/TaskList/TaskList";

function App() {
	return (
		<div className="App">
			<TaskList />
		</div>
	);
}

export default App;
