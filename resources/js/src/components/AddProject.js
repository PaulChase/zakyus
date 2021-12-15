import { useEffect, useState } from "react";
import api from "../api";

const AddProject = ({ closeForm, refreshUserProjects }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleAddProject = (e) => {
        e.preventDefault();

        const project = { name, description };

        console.log(project);

        api.addProject(project).then((res) => {
            closeForm();
            refreshUserProjects();
        });
    };

    return (
        <div
            className=" fixed top-0 left-0 flex justify-center items-center h-screen w-screen"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
            <div className=" bg-gray-700 p-6 rounded-md">
                <p>
                    <button
                        onClick={closeForm}
                        className=" font-extrabold text-xl float-right"
                    >
                        X
                    </button>
                </p>
                <h3 className=" font-semibold text-lg text-center my-3">
                    Add a Project
                </h3>
                <form
                    action=""
                    onSubmit={handleAddProject}
                    className=" text-gray-700"
                >
                    <input
                        type="text"
                        className=" w-full outline-none focus:ring-2 mt-1 border border-gray-100 rounded-md p-2 my-2 bg-gray-300 "
                        value={name}
                        placeholder="Name of the project..."
                        onChange={(e) => setName(e.target.value)}
                    />
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className=" w-full outline-none focus:ring-2 mt-1 border border-gray-100 rounded-md p-2 my-2 bg-gray-300 "
                        value={description}
                        placeholder="Add a fun  description of the project (optional)..."
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <button
                        type="submit"
                        className=" bg-green-500 w-full rounded-md uppercase p-2 font-bold text-white"
                    >
                        Add Project
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProject;
