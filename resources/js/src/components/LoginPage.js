import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setLoggedInUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLoginUser = async (e) => {
        e.preventDefault();

        const user = { email, password };

        await api.loginUser(user).then(async (res) => {
            if (res.data.message == "success") {
                const loggedInUser = res.data.user;
                await setLoggedInUser(loggedInUser);
                console.log(res.data);
                navigate("/dashboard");
            } else {
                console.log(res.data.message);
            }
        });
    };
    return (
        <div className=" max-w-3xl mx-auto p-4">
            <h2 className=" my-3 font-semibold text-lg text-center">
                Login into Your Account
            </h2>
            <form action="" className=" space-y-4" onSubmit={handleLoginUser}>
                <div>
                    <label htmlFor="">Your Email</label>
                    <br />
                    <input
                        type="email"
                        className=" w-full outline-none focus:ring-2 mt-1 border border-gray-100 rounded-md p-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <br />
                    <input
                        type="password"
                        className=" w-full outline-none focus:ring-2 mt-1 border border-gray-100 rounded-md p-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className=" bg-yellow-700 w-full rounded-md uppercase p-2 font-bold text-white"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
