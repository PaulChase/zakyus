import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className=" mt-5 text-center text-xl text-gray-700 space-y-4 ">
            <p className=" text-9xl">&#129409;</p>
            <p>
                Sorry, the page you are looking is not found or you possibly
                made a mistake in the URL.
            </p>
            <p>But no worries, go to our homepage explore moree..</p>
            <Link
                to="/"
                className=" bg-green-500 px-3 py-2 rounded-md font-semibold mt-3 inline-block w-auto"
            >
                <i className="fa fa-home mr-2"></i> Home page{" "}
            </Link>
        </div>
    );
};

export default NotFound;
