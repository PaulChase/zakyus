import { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const ValidateUser = ({ setLoggedInUser, setAuthStatus }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [form, SetForm] = useState("signup");
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    // register the user and send the user to their profile page
    const handleRegisterUser = async (e) => {
        e.preventDefault();
        setIsPending(true);
        const user = { name, email, password };
        await api.registerUser(user).then(async (res) => {
            if (res.data.message == "success") {
                const loggedInUser = res.data.user;
                setUserDetails(loggedInUser);
            } else {
                console.log(res.data.message);
            }
        });
    };

    // login the user and redirect the logged in user to their profile page
    const handleLoginUser = async (e) => {
        e.preventDefault();
        setIsPending(true);

        const user = { email, password };

        await api.loginUser(user).then(async (res) => {
            if (res.data.message == "success") {
                const loggedInUser = res.data.user;
                setUserDetails(loggedInUser);
            } else {
                console.log(res.data.message);
            }
        });
    };

    const setUserDetails = (user) => {
        sessionStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("isLoggedIn", true);
        setLoggedInUser(user);
        setAuthStatus();
        setIsPending(false);

        navigate("/profile");
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
                required
                placeholder="Your name..."
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                className=" w-full outline-none focus:ring-2 mt-1 border border-gray-100 rounded-md p-2 my-2"
                value={email}
                required
                placeholder="Your email address"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                required
                className=" w-full outline-none focus:ring-2 mt-1 border border-gray-100 rounded-md p-2 my-2"
                value={password}
                placeholder="create a password"
                onChange={(e) => setPassword(e.target.value)}
            />
            {isPending ? (
                <button
                    type="submit"
                    disabled
                    className=" bg-green-400 w-full rounded-md uppercase p-2 font-bold text-white"
                >
                    Submitting...
                </button>
            ) : (
                <button
                    type="submit"
                    className=" bg-green-500  focus:bg-green-700 w-full rounded-md uppercase p-2 font-bold text-white"
                >
                    Sign up
                </button>
            )}
        </form>
    );

    const loginForm = (
        <form action="" onSubmit={handleLoginUser} className=" text-gray-700">
            <input
                type="email"
                className=" w-full outline-none focus:ring-2 mt-1 border border-gray-100 rounded-md p-2 my-2"
                value={email}
                required
                placeholder="Your email address"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                required
                className=" w-full outline-none focus:ring-2 mt-1 border border-gray-100 rounded-md p-2 my-2"
                value={password}
                placeholder="Input your password"
                onChange={(e) => setPassword(e.target.value)}
            />
            {isPending ? (
                <button
                    type="submit"
                    disabled
                    className=" bg-green-400 w-full rounded-md uppercase p-2 font-bold text-white"
                >
                    Validating...
                </button>
            ) : (
                <button
                    type="submit"
                    className=" bg-green-500 focus:bg-green-700 w-full rounded-md uppercase p-2 font-bold text-white"
                >
                    Log In
                </button>
            )}
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
