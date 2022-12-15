import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

export default function TaskList() {

  const { tasks, deleteTask } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center mt-10">¡No hay tareas aún!</h1>;
  }

  return (
    <div className="xl:grid grid-cols-4 gap-2 sm:flex flex-col">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}
