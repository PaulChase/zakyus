import { useEffect, useState } from "react";
import api from "../api";
import IsLoading from "./IsLoading";

// the list of the users projects in the side bar for easy access
const ProjectMenu = ({ changeMenu, refreshTasks }) => {
    const [projects, setProjects] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.getAllProjects().then((res) => {
            setIsLoading(false);
            setProjects(res.data);
        });
    }, []);
    return (
        <div className=" p-2">
            <button className=" cursor-pointer" onClick={() => changeMenu()}>
                <span className="fa fa-chevron-left mr-2 block"></span>
                back
            </button>
            <br />
            <h3 className=" font-bold text-xl text-center mt-3">Projects</h3>
            {isLoading && <IsLoading message="Getting your projects" />}

            <ul>
                {projects &&
                    projects.map((project) => (
                        <li
                            className=" px-4 py-2 font-semibold hover:bg-gray-600 cursor-pointer"
                            key={project.id}
                            onClick={() => {
                                localStorage.setItem("projectID", project.id);
                                refreshTasks();
                            }}
                        >
                            <span className=" font-semibold text-gray-500 mr-3">
                                #
                            </span>
                            {project.name}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default ProjectMenu;
