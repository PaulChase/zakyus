import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="  w-full bg-yellow-600">
            <div className=" flex justify-between items-center max-w-6xl mx-auto p-3 text-white">
                <Link to="/" className=" font-bold text-xl ">
                    Winterfell
                </Link>
                <ul className=" flex space-x-2">
                    <Link to="/add">Add</Link>
                    <Link to="/about">About Us</Link>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
