import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import ValidateUser from "./ValidateUser";

const Home = ({ setLoggedInUser, isLoggedIn, user }) => {
    return (
        <main className=" bg-gray-800 h-screen w-screen text-white">
            {/* the top nav bar  */}
            <nav className=" flex justify-between p-6">
                <div className=" flex space-x-4 justify-center items-baseline">
                    <h1 className=" text-4xl uppercase font-bold">Zakyus</h1>
                    <p className=" text-sm">The TasksCollector</p>
                </div>
                <div className=" flex justify-center  items-center space-x-3">
                    <Link to="/features">Features</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Servcices</Link>
                    <Link to="/contact">Contact Me</Link>
                </div>
            </nav>
            {/* the body */}
            <div className=" flex justify-between items-center h-full w-full p-8">
                <div className=" grid grid-cols-6 gap-6">
                    <div className=" col-span-4 w-2/3 ">
                        <h3 className=" text-4xl mb-5 font-bold">
                            The Simple Project Workflow and Tacks Management
                            tool for Developers
                        </h3>
                        <p className=" text-lg ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nihil sequi, saepe nobis aut quas in quia
                            voluptatum eius dolor soluta vel possimus architecto
                            dolorum quidem eos doloremque dignissimos esse enim?
                        </p>
                    </div>
                    <div className="  bg-gray-50 rounded-md p-3 col-span-2 text-gray-700">
                        {isLoggedIn ? (
                            <div className=" flex flex-col justify-center items-center text-center w-2/3 mx-auto">
                                <h3 className=" text-2xl font-semibold text-center mb-5">
                                    Good to have you Back, {user.name}
                                </h3>
                                <Link
                                    to="/profile"
                                    className="bg-green-500 w-full rounded-md uppercase p-2 font-bold text-white"
                                >
                                    {" "}
                                    visit your profile
                                </Link>
                            </div>
                        ) : (
                            <ValidateUser setLoggedInUser={setLoggedInUser} />
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
