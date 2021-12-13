import { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const ValidateUser = ({ setLoggedInUser }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [form, SetForm] = useState("signup");
    const navigate = useNavigate();

    const handleRegisterUser = async (e) => {
        e.preventDefault();

        const user = { name, email, password };
        await api.registerUser(user).then(async (res) => {
            if (res.data.message == "success") {
                const loggedInUser = res.data.user;
                setLoggedInUser(loggedInUser);
                console.log(res.data);
                navigate("/profile");
            } else {
                console.log(res.data.message);
            }
        });
    };

    const handleLoginUser = async (e) => {
        e.preventDefault();

        const user = { email, password };

        await api.loginUser(user).then(async (res) => {
            if (res.data.message == "success") {
                const loggedInUser = res.data.user;
                setLoggedInUser(loggedInUser);
                console.log(res.data);
                navigate("/profile");
            } else {
                console.log(res.data.message);
            }
        });
    };

    const signUpForm = (
        <form
            action=""
            onSubmit={handleRegisterUser}
            className=" text-gray-700"
        >
            <input
                type="text"
                className=" w-full outline-none focus:ring-2 mt-1 border border-gray-100 rounded-md p-2 my-2"
                value={name}
                placeholder="Your name..."
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                className=" w-full outline-none focus:ring-2 mt-1 border border-gray-100 rounded-md p-2 my-2"
                value={email}
                placeholder="Your email address"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                className=" w-full outline-none focus:ring-2 mt-1 border border-gray-100 rounded-md p-2 my-2"
                value={password}
                placeholder="create a password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                type="submit"
                className=" bg-green-500 w-full rounded-md uppercase p-2 font-bold text-white"
            >
                Sign up
            </button>
        </form>
    );

    const loginForm = (
        <form action="" onSubmit={handleLoginUser} className=" text-gray-700">
            <input
                type="email"
                className=" w-full outline-none focus:ring-2 mt-1 border border-gray-100 rounded-md p-2 my-2"
                value={email}
                placeholder="Your email address"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                className=" w-full outline-none focus:ring-2 mt-1 border border-gray-100 rounded-md p-2 my-2"
                value={password}
                placeholder="Input your password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                type="submit"
                className=" bg-green-500 w-full rounded-md uppercase p-2 font-bold text-white"
            >
                Log In
            </button>
        </form>
    );

    return (
        <>
            <div className=" grid grid-cols-2 gap-3 text-center  text-gray-700 text-2xl mb-3">
                <button
                    onClick={() => SetForm("signup")}
                    className="uppercase font-semibold"
                >
                    Sign Up{" "}
                </button>
                <button
                    onClick={() => SetForm("login")}
                    className="uppercase font-semibold"
                >
                    LogIn{" "}
                </button>
            </div>
            {form == "signup" && signUpForm}
            {form == "login" && loginForm}
        </>
    );
};

export default ValidateUser;
