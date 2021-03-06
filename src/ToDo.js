import { React, Component } from "react";
import Form from "./Components/Form";
import ItemsList from "./Components/ItemsList";
import DoneItems from "./Components/DoneItems";

class ToDo extends Component {
  initialInputTask = "";
  state = {
    inputTask: this.initialInputTask,
    tasksToDo: [],
  };

  // Method that listen the changes of the input for new tasks
  handleChange = (event) => {
    const { value } = event.target;
    this.setState({
      inputTask: value,
    });
  };

  // Method that add new task to the list
  handleAddTask = (event) => {
    const { inputTask, tasksToDo } = this.state;
    if (inputTask === "") {
      alert("Cannot create empty tasks");
    } else {
      const data = {
        title: inputTask,
        done: false,
      };
      this.setState({
        tasksToDo: [...tasksToDo, data],
        inputTask: this.initialInputTask,
      });
    }

    event.preventDefault();
  };

  // Method that check or uncheck if a task is completed
  handleCheckTask = (index, check) => {
    const { tasksToDo } = this.state;

    tasksToDo[index].done = check;
    this.setState({
      tasksToDo: tasksToDo,
    });
  };

  // Method that delete a task from the list
  handleDeleteTask = (index) => {
    const { tasksToDo } = this.state;

    this.setState({
      tasksToDo: tasksToDo.filter((task, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    const { inputTask, tasksToDo } = this.state;
    return (
      <div className="bg-teal-800 drop-shadow-lg w-full min-h-screen px-5 py-20 flex flex-col items-center ">
        <main className="container max-w-xl bg-slate-300 p-8 rounded-xl">
          <Form
            handleChange={this.handleChange}
            handleAddTask={this.handleAddTask}
            value={inputTask}
          />
          <ItemsList
            tasksToDo={tasksToDo}
            handleCheckTask={this.handleCheckTask}
            handleDeleteTask={this.handleDeleteTask}
          />
          <DoneItems
            tasksToDo={tasksToDo}
            handleCheckTask={this.handleCheckTask}
          />
        </main>
      </div>
    );
  }
}

export default ToDo;
