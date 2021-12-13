import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const RegisterPage = ({ setLoggedInUser }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegisterUser = async (e) => {
        e.preventDefault();

        const user = { name, email, password };
        await api.registerUser(user).then(async (res) => {
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
                Create your Free Account
            </h2>
            <form
                action=""
                className=" space-y-4"
                onSubmit={handleRegisterUser}
            >
                <div>
                    <label htmlFor="">Your full name</label>
                    <br />
                    <input
                        type="text"
                        className=" w-full outline-none focus:ring-2 mt-1 border border-gray-100 rounded-md p-2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                {/* <div>
                    <label htmlFor="">Pick a unique Username</label>
                    <br />
                    <input
                        type="text"
                        className=" w-full outline-none focus:ring-2 mt-1 border border-gray-100 rounded-md p-2"
                    />
                </div> */}
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
                    <label htmlFor="">Create Password</label>
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
                    className=" bg-yellow-600 w-full rounded-md uppercase p-2 font-bold text-white"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;
