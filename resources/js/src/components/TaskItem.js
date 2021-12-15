import api from "../api";

const TaskItem = ({
    task,
    color,
    buttonText,
    moveTaskTo,
    refreshTasks,
    reverseAction,
    reverseTaskTo,
}) => {
    return (
        <div
            className={` border-l-4  rounded-md p-3 my-3 border-${color}-500 shadow`}
        >
            <h4 className=" font-semibold text-gray-600">{task.name}</h4>
            <div className=" mt-3 grid grid-cols-2 gap-x-2">
                <button
                    className={`bg-${color}-200 px-3 py-1 rounded-md  shadow-inner border-2 border-${color}-500 text-${color}-700 focus:bg-${color}-400 focus:text-white`}
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
                <button
                    className=" text-gray-700 font-semibold focus:bg-gray-300 rounded-md px-3 py-1"
                    onClick={() => {
                        api.changeTaskStatus({
                            id: task.id,
                            status: reverseTaskTo,
                        })
                            .then((res) => {
                                console.log(res);
                                refreshTasks();
                            })
                            .catch((err) => console.log(err));
                    }}
                >
                    {reverseAction}
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
