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
    const [currentProject, setCurrentProject] = useState(null);
    const [user, setUser] = useState(null);

    // get the users's project tasks
    useEffect(() => {
        const loggedInUser = JSON.parse(sessionStorage.getItem("user"));

        const getProjectID = localStorage.getItem("projectID");
        setUser(loggedInUser);

        setProjectID(getProjectID);
        getAllTasks(getProjectID);
    }, [taskAdded]);

    const getAllTasks = (getProjectID) => {
        api.getUserTasks(getProjectID).then((res) => {
            const project = res.data.project;
            const projectTasks = res.data.tasks;
            setIsLoading(false);

            setCurrentProject(project);
            setTasks(projectTasks);

            // console.log(res);
        });
    };
    return (
        <div className="  flex bg-gray-400 h-auto">
            <div className=" w-full mr-80">
                <NavBar currentProject={currentProject} />
                {isLoading && <IsLoading message="Getting your tasks" />}
                {tasks && (
                    <div className=" grid grid-cols-3 gap-4 p-3 text-gray-700 ">
                        {/* filter task list based on the status of the task */}
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

            <div className="fixed w-80 top-0 right-0 bg-gray-800 shadow-2xl text-white text-lg h-screen overflow-auto">
                {tasks && (
                    <SideBar
                        user={user}
                        refreshTasks={() => {
                            setIsLoading(true);
                            setTaskAdded(!taskAdded);
                        }}
                        tasks={tasks.filter((task) => task.status == "saved")}
                    />
                )}
            </div>
        </div>
    );
};

export default DashBoard;
