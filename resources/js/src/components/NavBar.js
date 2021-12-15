import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import { useState, useEffect } from "react";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <nav className="w-full bg-gray-700 text-white flex justify-between items-center p-3">
            <div className=" flex space-x-4 justify-center items-baseline">
                <h1 className=" text-xl uppercase font-bold text-green-500">
                    Zakyus
                </h1>
                <p className=" text-sm">The TasksCollector</p>
            </div>
            <div>
                <form action="">
                    <input
                        type="text"
                        className="  outline-none focus:ring-2 border border-gray-100 rounded-md p-2  mr-3 bg-gray-300 "
                        // value={query}
                        placeholder="Name of the project..."
                        // onChange={(e) => setName(e.target.value)}
                    />
                    <button
                        type="submit"
                        className=" bg-green-500 rounded-md uppercase p-2 font-bold text-white"
                    >
                        Search
                    </button>
                </form>
            </div>
            <div className=" font-semibold text-lg">Twitter Clone</div>
        </nav>
    );
};

export default NavBar;
