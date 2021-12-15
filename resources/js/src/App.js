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

function App() {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkIfUserIsLOggedIn = () => {
        api.getLoggedInUser().then((res) => {
            setUser(res.data.user);
            setIsLoggedIn(true);
        });
    };

    useEffect(() => checkIfUserIsLOggedIn(), []);

    return (
        <Router>
            {/* <NavBar user={user} setLoggedInUser={(user) => setUser(user)} /> */}

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
                <Route path="/profile" element={<UserProfile user={user} />} />
                <Route path="/dashboard" element={<DashBoard />} />
            </Routes>
        </Router>
    );
}

export default App;

if (document.getElementById("example")) {
    ReactDOM.render(<App />, document.getElementById("example"));
}
