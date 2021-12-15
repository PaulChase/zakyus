import api from "../api";

const TaskItem = ({ task, color, buttonText, moveTaskTo, refreshTasks }) => {
    return (
        <div
            className={` border-l-4  rounded-md p-3 my-3 border-${color}-500 shadow`}
        >
            <h4 className=" font-semibold text-gray-600">{task.name}</h4>
            <button
                className={`bg-${color}-200 px-3 py-1 rounded-md mt-3 shadow-inner border-2 border-${color}-500 text-${color}-700 focus:bg-${color}-400 focus:text-white`}
                onClick={() => {
                    api.changeTaskStatus({
                        id: task.id,
                        status: moveTaskTo,
                    })
                        .then((res) => {
                            console.log(res);
                            refreshTasks();
                        })
                        .catch((err) => console.log(err));
                }}
            >
                {buttonText} <i className=" fa fa-chevron-right ml-2"></i>
            </button>
        </div>
    );
};

export default TaskItem;
