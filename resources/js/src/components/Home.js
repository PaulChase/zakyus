import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import ValidateUser from "./ValidateUser";

const Home = ({ setLoggedInUser, user, setAuthStatus }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const authStatus = sessionStorage.getItem("isLoggedIn");
        if (authStatus == "true") {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    });
    return (
        <main className=" bg-gray-800 h-screen w-screen text-white">
            {/* the top nav bar  */}
            <nav className=" flex justify-between p-6 max-w-7xl mx-auto">
                <div className=" flex space-x-4 justify-center items-baseline">
                    <h1 className=" text-4xl uppercase font-bold">
                        {" "}
                        <i className="fa fa-list-alt mr-2"></i> Zakyus
                    </h1>
                    <p className=" text-sm"> The TasksCollector</p>
                </div>
                <div className=" flex justify-center  items-center space-x-3">
                    <Link to="/">Features</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Team</Link>
                </div>
            </nav>
            {/* the body */}
            <div className=" flex justify-between items-center h-full w-full p-6 max-w-7xl mx-auto">
                <div className=" grid grid-cols-6 gap-6">
                    <div className=" col-span-4 w-2/3 ">
                        <h3 className=" text-4xl mb-5 font-bold">
                            The Simple{" "}
                            <span className="text-green-500">Projects</span>{" "}
                            folder and{" "}
                            <span className="text-green-500">Tasks</span>{" "}
                            Management tool for Developers and Creators
                        </h3>
                        <p className=" text-lg ">
                            An easy way to plan and organize the necessary steps
                            needed to complete your projects at hand. You can
                            add new tasks, move them across stages of
                            completion, archive them when your done all within a
                            single dashboard. Signup now to get started...
                        </p>
                    </div>
                    <div className="  bg-gray-100 rounded-md p-3 col-span-2 text-gray-700">
                        {isLoggedIn ? (
                            <div className=" flex flex-col justify-center items-center text-center w-2/3 mx-auto">
                                <span className="fa fa-user fa-4x mb-3 text-green-500"></span>
                                <h3 className=" text-2xl font-semibold text-center mb-5">
                                    Nice to have you here, {user.name}
                                </h3>
                                <Link
                                    to="/profile"
                                    className="bg-green-500 focus:bg-green-700 w-full rounded-md uppercase p-2 font-bold text-white"
                                >
                                    {" "}
                                    visit your profile{" "}
                                    <i className=" fa fa-chevron-right ml-2"></i>
                                </Link>
                            </div>
                        ) : (
                            <ValidateUser
                                setLoggedInUser={setLoggedInUser}
                                setAuthStatus={setAuthStatus}
                            />
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
