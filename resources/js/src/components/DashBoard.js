import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import api from "../api";
import TaskList from "./TaskList";
import IsLoading from "./IsLoading";

const DashBoard = () => {
    const [tasks, setTasks] = useState(null);
    const [projectID, setProjectID] = useState(null);
    const [taskAdded, setTaskAdded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getProjectID = localStorage.getItem("projectID");
        setProjectID(getProjectID);
        getAllTasks(getProjectID);
    }, [taskAdded]);

    const getAllTasks = (getProjectID) => {
        api.getUserTasks(getProjectID).then((res) => {
            setIsLoading(false);
            setTasks(res.data.data);

            // console.log(res.data.data);
        });
    };
    return (
        <div className="  flex bg-gray-400 h-auto">
            <div className=" w-full mr-80">
                <NavBar />
                {isLoading && <IsLoading message="Getting your tasks" />}
                {tasks && (
                    <div className=" grid grid-cols-3 gap-4 p-3 ">
                        <TaskList
                            tasks={tasks.filter(
                                (task) => task.status == "initial"
                            )}
                            projectID={projectID}
                            title="Tasks"
                            color="blue"
                            buttonText="start"
                            reverseTaskTo="deleted"
                            reverseAction="Delete"
                            moveTaskTo="motion"
                            status="initial"
                            refreshTasks={() => setTaskAdded(!taskAdded)}
                        />
                        <TaskList
                            tasks={tasks.filter(
                                (task) => task.status == "motion"
                            )}
                            projectID={projectID}
                            title="In Progress"
                            color="yellow"
                            buttonText="Complete"
                            reverseTaskTo="initial"
                            reverseAction="Go back"
                            moveTaskTo="final"
                            status="motion"
                            refreshTasks={() => setTaskAdded(!taskAdded)}
                        />
                        <TaskList
                            tasks={tasks.filter(
                                (task) => task.status == "final"
                            )}
                            projectID={projectID}
                            title="Completed"
                            color="green"
                            buttonText="Archive"
                            moveTaskTo="saved"
                            reverseTaskTo="motion"
                            reverseAction="Go back"
                            status="final"
                            refreshTasks={() => setTaskAdded(!taskAdded)}
                        />
                    </div>
                )}
            </div>

            <div>
                <SideBar />
            </div>
        </div>
    );
};

export default DashBoard;
