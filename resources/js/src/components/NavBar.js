import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import { useState, useEffect } from "react";

const NavBar = ({ user, setLoggedInUser }) => {
    const navigate = useNavigate();

    // useEffect(async () => {
    //     await api
    //         .getLoggedInUser()
    //         .then((res) => {
    //             const loggedInUser = res.data.user;
    //             setLoggedInUser(loggedInUser);
    //         })
    //         .catch((err) => {
    //             console.log(err.message);
    //             navigate("/login");
    //         });
    // }, []);
    return (
        <nav className="  w-full bg-yellow-500">
            <div className=" flex justify-between items-center max-w-6xl mx-auto p-3 text-white">
                <Link to="/" className=" font-bold text-2xl uppercase ">
                    demsay
                </Link>
                <ul className=" flex space-x-3 justify-center items-center font-semibold">
                    <Link to="/dashboard">Profile</Link>

                    <Link to="/add">Add Post</Link>

                    {user ? (
                        user.name
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link
                                to="/register"
                                className=" px-3 py-1 bg-white rounded-md text-yellow-700"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}

                    <button
                        onClick={() => {
                            api.loginOutUser()
                                .then((res) => {
                                    console.log(res);
                                })
                                .catch((err) =>
                                    console.log(" unsuccessful " + err)
                                );
                        }}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
