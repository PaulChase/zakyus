import api from "../api";
import img from "../avatar.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProjectMenu from "./ProjectMenu";
import ArchiveList from "./ArchiveList";

const SideBar = ({ user, refreshTasks, tasks }) => {
    const [menu, setMenu] = useState(null);
    const navigate = useNavigate();
    const { name } = user;

    // switch between menus on the sidebar
    switch (menu) {
        case "projects":
            return (
                <ProjectMenu
                    changeMenu={() => setMenu(null)}
                    refreshTasks={refreshTasks}
                />
            );
            break;
        case "archive":
            return (
                <ArchiveList
                    tasks={tasks}
                    changeMenu={() => setMenu(null)}
                    refreshTasks={refreshTasks}
                />
            );
            break;

        default:
            return (
                <div className=" ">
                    <div className=" text-center p-6">
                        <div className=" bg-blue-500 rounded-full p-8 w-40 h-40 mx-auto text-4xl font-extrabold flex justify-center items-center">
                            {name.slice(0, 1).toUpperCase()}
                        </div>
                        <h3 className=" font-semibold text-lg my-3">
                            {user && name}
                        </h3>
                    </div>
                    <div>
                        <h4 className=" text-gray-400 p-3">Menu</h4>
                        <ul className=" cursor-pointer">
                            <li className=" px-4 py-2 font-semibold hover:bg-gray-600">
                                <i className="fa fa-user mr-4"></i>
                                Profile
                            </li>
                            <li
                                className=" px-4 py-2 font-semibold hover:bg-gray-600"
                                onClick={() => setMenu("projects")}
                            >
                                <i className="fa fa-cubes mr-4"></i>
                                Projects
                            </li>
                            <li
                                className=" px-4 py-2 font-semibold hover:bg-gray-600"
                                onClick={() => setMenu("archive")}
                            >
                                <i className="fa fa-folder-open mr-4"></i>
                                Archive
                            </li>
                            <li className=" px-4 py-2 font-semibold hover:bg-gray-600">
                                <i className="fa fa-photo mr-4"></i>
                                Wallpapers
                            </li>
                            <li
                                className=" px-4 py-2 font-semibold hover:bg-gray-600"
                                onClick={() => {
                                    api.loginOutUser().then((res) => {
                                        navigate("/");
                                    });
                                }}
                            >
                                <i className="fa fa-reply mr-4"></i>
                                Logout
                            </li>
                        </ul>
                    </div>
                </div>
            );
            break;
    }
};

export default SideBar;
