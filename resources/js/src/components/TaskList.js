import TaskItem from "./TaskItem";
import { useEffect, useState } from "react";
import api from "../api";

const TaskList = ({
    tasks,
    title,
    color,
    buttonText,
    moveTaskTo,
    status,
    projectID,
    refreshTasks,
    reverseTaskTo,
    reverseAction,
}) => {
    const [addTask, setAddTask] = useState(false);
    const [name, setName] = useState("");

    const handleAddTask = (e) => {
        e.preventDefault();

        const task = { name, status, projectID };

        api.addTask(task).then((res) => {
            console.log(res.data);
            refreshTasks();
            setAddTask(false);
            setName("");
        });
    };
    return (
        <div className=" bg-gray-100 p-2 rounded-md">
            <h3 className=" font-semibold text-lg mb-3 px-2">{title}</h3>
            {tasks &&
                tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        color={color}
                        buttonText={buttonText}
                        moveTaskTo={moveTaskTo}
                        refreshTasks={refreshTasks}
                        reverseTaskTo={reverseTaskTo}
                        reverseAction={reverseAction}
                    />
                ))}

            {!addTask && (
                <button
                    onClick={() => setAddTask(true)}
                    className=" bg-green-500 w-full rounded-md uppercase p-2 font-bold text-white"
                >
                    Add Task
                </button>
            )}

            {/* form to add task */}
            {addTask && (
                <form action="" onSubmit={handleAddTask}>
                    <textarea
                        cols="30"
                        rows="3"
                        className=" w-full outline-none focus:ring-2 mt-1 border border-gray-100 rounded-md p-2 my-2 bg-gray-300 "
                        value={name}
                        placeholder="enter the name of the task..."
                        onChange={(e) => setName(e.target.value)}
                        required
                    ></textarea>
                    <div className=" grid grid-cols-2 gap-3 my-2">
                        <button
                            type="submit"
                            className=" bg-green-500 w-full rounded-md uppercase p-2 font-bold text-white text-center"
                        >
                            Submit task
                        </button>
                        <button
                            onClick={() => setAddTask(false)}
                            className="  p-2 font-bold  text-center text-gray-600"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default TaskList;
