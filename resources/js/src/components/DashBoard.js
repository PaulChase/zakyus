import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import api from "../api";
import TaskList from "./TaskList";

const DashBoard = () => {
    const [tasks, setTasks] = useState(null);
    const [projectID, setProjectID] = useState(null);

    useEffect(() => {
        const getProjectID = localStorage.getItem("projectID");
        setProjectID(getProjectID);
        getAllTasks(getProjectID);
    }, []);

    const getAllTasks = (getProjectID) => {
        api.getUserTasks(getProjectID).then((res) => {
            setTasks(res.data.data);

            // console.log(res.data.data);
        });
    };
    return (
        <div className="  flex bg-gray-400 h-screen">
            <div className=" w-full mr-80">
                <NavBar />

                {tasks && (
                    <div className=" grid grid-cols-3 gap-4 p-3 ">
                        <TaskList
                            tasks={tasks.filter(
                                (task) => task.status == "initial"
                            )}
                            title="Tasks"
                            color="blue"
                        />
                        <TaskList
                            tasks={tasks.filter(
                                (task) => task.status == "motion"
                            )}
                            title="In Progress"
                            color="yellow"
                        />
                        <TaskList
                            tasks={tasks.filter(
                                (task) => task.status == "final"
                            )}
                            title="Completed"
                            color="green"
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
