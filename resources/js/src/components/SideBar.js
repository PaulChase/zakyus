import img from "../avatar.jpg";
const SideBar = () => {
    return (
        <div className=" fixed w-80 top-0 right-0 bg-gray-800 shadow-2xl text-white text-lg h-screen">
            <div className=" text-center p-6">
                <img src={img} className=" w-44 h-44 rounded-full mx-auto" />
                <h3 className=" font-semibold text-lg my-3">Guest two</h3>
            </div>
            <div>
                <h4 className=" text-gray-400 p-3">Menu</h4>
                <ul>
                    <li className=" px-4 py-2 font-semibold hover:bg-gray-600">
                        Profile
                    </li>
                    <li className=" px-4 py-2 font-semibold hover:bg-gray-600">
                        archive
                    </li>
                    <li className=" px-4 py-2 font-semibold hover:bg-gray-600">
                        Wallpapers
                    </li>
                    <li className=" px-4 py-2 font-semibold hover:bg-gray-600">
                        Logout
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
