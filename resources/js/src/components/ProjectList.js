import { useEffect, useState } from "react";
import api from "../api";

const ProjectList = ({ projects }) => {
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
                            <button className=" bg-green-500 rounded-md px-2 py-2 font-semibold shadow-xl">
                                Enter project
                            </button>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default ProjectList;
