import TaskItem from "./TaskItem";

const ArchiveList = ({ changeMenu, tasks, refreshTasks }) => {
    return (
        <div className=" p-2 text-white">
            <button className=" cursor-pointer" onClick={() => changeMenu()}>
                <span className="fa fa-chevron-left mr-2 block"></span>
                back
            </button>
            <h3 className=" font-bold text-xl text-center mt-3">
                Archive Tasks
            </h3>
            {tasks &&
                tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        color="gray"
                        buttonText="Delete"
                        moveTaskTo="deleted"
                        refreshTasks={refreshTasks}
                        reverseTaskTo="initial"
                        reverseAction="Go back"
                    />
                ))}
        </div>
    );
};

export default ArchiveList;
