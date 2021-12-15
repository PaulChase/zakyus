const TaskList = ({ tasks, title, color }) => {
    return (
        <div className=" bg-gray-100 p-2 rounded-md">
            <h3 className=" font-semibold text-lg mb-3 px-2">{title}</h3>
            {tasks &&
                tasks.map((task) => (
                    <div
                        key={task.id}
                        className={` border-l-4  rounded-md p-3 my-3 border-${color}-500 shadow`}
                    >
                        <h4 className=" font-semibold">{task.name}</h4>
                    </div>
                ))}
        </div>
    );
};

export default TaskList;
