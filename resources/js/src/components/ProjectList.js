import { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const ProjectList = ({ projects }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className=" grid grid-cols-3 gap-4 my-5">
                {projects &&
                    projects.map((project) => (
                        <div
                            key={project.id}
                            className=" shadow-2xl rounded-md p-6 space-y-3"
                        >
                            <h4 className=" text-green-500 font-semibold text-lg">
                                {project.name}
                            </h4>
                            <p>{project.description}</p>
                            <button
                                onClick={() => {
                                    localStorage.setItem(
                                        "projectID",
                                        project.id
                                    );
                                    navigate("/dashboard");
                                }}
                                className=" bg-green-500 focus:bg-green-700 rounded-md px-2 py-2 font-semibold shadow-xl"
                            >
                                Enter project{" "}
                                <i className=" fa fa-chevron-right ml-2"></i>
                            </button>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default ProjectList;
