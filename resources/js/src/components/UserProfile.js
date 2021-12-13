import { useEffect, useState } from "react";
import api from "../api";
import AddProject from "./AddProject";
import ProjectList from "./ProjectList";

const UserProfile = ({ user }) => {
    const [showForm, setShowForm] = useState(false);
    const [projects, setProjects] = useState(null);

    const getUserProjects = () => {
        api.getAllProjects().then((res) => {
            const projects = res.data;
            setProjects(projects);
            console.log(res.data);
        });
    };

    useEffect(() => getUserProjects(), []);

    return (
        <main className=" bg-gray-600  text-white ">
            <nav className=" p-8 bg-gray-800">
                <div className=" max-w-4xl mx-auto">
                    <h3 className=" text-2xl text-center my-3 font-bold">
                        Welcome to your profile
                    </h3>
                    <div className=" flex mb-5">
                        <div className=" bg-blue-500 rounded-full p-10 w-16 h-16 mr-4 text-3xl font-extrabold flex justify-center items-center">
                            M
                        </div>
                        <div>
                            <h3 className=" mb-2 font-semibold text-lg">
                                {user.name}
                            </h3>
                            <p>{user.email}</p>
                        </div>
                    </div>
                </div>
            </nav>
            {showForm && (
                <AddProject
                    closeForm={() => setShowForm(false)}
                    refreshUserProjects={() => getUserProjects()}
                />
            )}
            <div className=" max-w-4xl mx-auto my-5 py-6">
                <div className=" flex justify-between items-center">
                    <h3 className=" text-xl font-semibold ">
                        What do you want to work on today?
                    </h3>
                    <button
                        onClick={() => setShowForm(true)}
                        className=" bg-green-500 rounded-md px-4 py-2 font-semibold text-base shadow-xl"
                    >
                        Add new Project
                    </button>
                </div>
                <ProjectList projects={projects} />
            </div>
        </main>
    );
};

export default UserProfile;
