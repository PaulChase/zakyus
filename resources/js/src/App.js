import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";

import { useEffect, useState } from "react";
import DashBoard from "./components/DashBoard";
import api from "./api";
import UserProfile from "./components/UserProfile";
import "font-awesome/css/font-awesome.min.css";
import IsLoading from "./components/IsLoading";

function App() {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const checkIfUserIsLOggedIn = () => {
        api.getLoggedInUser()
            .then((res) => {
                setIsLoading(false);
                sessionStorage.setItem("user", JSON.stringify(res.data.user));
                sessionStorage.setItem("isLoggedIn", true);
                setUser(res.data.user);
                setIsLoggedIn(true);
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    };

    useEffect(() => checkIfUserIsLOggedIn(), []);

    return (
        <Router>
            {isLoading ? (
                <div className=" bg-gray-800 fixed top-0 left-0 w-full h-full opacity-80 flex justify-center items-center text-white">
                    <IsLoading message="One moment please..." />
                </div>
            ) : (
                <>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home
                                    setLoggedInUser={(user) => setUser(user)}
                                    isLoggedIn={isLoggedIn}
                                    user={user}
                                />
                            }
                        />
                        <Route
                            path="/profile"
                            element={<UserProfile user={user} />}
                        />
                        <Route
                            path="/dashboard"
                            element={<DashBoard user={user} />}
                        />
                    </Routes>
                </>
            )}
        </Router>
    );
}

export default App;

if (document.getElementById("example")) {
    ReactDOM.render(<App />, document.getElementById("example"));
}
