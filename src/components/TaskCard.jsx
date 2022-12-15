import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md sm: h-52">
      <h1 className="text-xl font-bold capitalize sm: text-center mt-5">{task.title}</h1>
      <p className="text-gray-500 text-sm sm: text-center mt-3">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4  hover:bg-red-300 sm:mt-16 ml-24"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Eliminar tarea
      </button>
    </div>
  );
}
