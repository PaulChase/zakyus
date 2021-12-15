import api from "../api";
import img from "../avatar.jpg";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const navigate = useNavigate();

    return (
        <div className=" fixed w-80 top-0 right-0 bg-gray-800 shadow-2xl text-white text-lg h-screen">
            <div className=" text-center p-6">
                <img src={img} className=" w-44 h-44 rounded-full mx-auto" />
                <h3 className=" font-semibold text-lg my-3">Guest two</h3>
            </div>
            <div>
                <h4 className=" text-gray-400 p-3">Menu</h4>
                <ul className=" cursor-pointer">
                    <li className=" px-4 py-2 font-semibold hover:bg-gray-600">
                        <i className="fa fa-user mr-4"></i>
                        Profile
                    </li>
                    <li className=" px-4 py-2 font-semibold hover:bg-gray-600">
                        <i className="fa fa-cubes mr-4"></i>
                        Projects
                    </li>
                    <li className=" px-4 py-2 font-semibold hover:bg-gray-600">
                        <i className="fa fa-folder-open mr-4"></i>
                        Archive
                    </li>
                    <li className=" px-4 py-2 font-semibold hover:bg-gray-600">
                        <i className="fa fa-photo mr-4"></i>
                        Wallpapers
                    </li>
                    <li
                        className=" px-4 py-2 font-semibold hover:bg-gray-600"
                        onClick={() => {
                            api.loginOutUser().then((res) => {
                                navigate("/");
                            });
                        }}
                    >
                        <i className="fa fa-reply mr-4"></i>
                        Logout
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
