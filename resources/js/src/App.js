import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Edit from "./components/Edit";
import Add from "./components/Add";
import Show from "./components/Show";

function Example() {
    return (
        <Router>
            <NavBar />

            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/add" element={<Add />} />
            </Routes>
            <Routes>
                <Route path="/posts/:id" element={<Show />} />
            </Routes>
            <Routes>
                <Route path="/posts/:id/edit" element={<Edit />} />
            </Routes>
        </Router>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
