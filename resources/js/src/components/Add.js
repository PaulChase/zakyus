import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.addPost({ title, author, body });
            navigate("/");
        } catch (e) {
            console.log("an error occured " + e);
        }
    };

    return (
        <div className=" p-3 max-w-4xl mx-auto">
            <h2 className=" font-semibold text-lg">This is the Add page</h2>
            <form action="" onSubmit={handleSubmit} className=" space-y-3">
                <div>
                    <label htmlFor="">Title</label>
                    <br />
                    <input
                        type="text"
                        className=" w-full outline-none focus:ring-2 mt-1 border border-gray-100 rounded-md p-2"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">Author</label>
                    <br />
                    <input
                        type="text"
                        className=" w-full outline-none focus:ring-2 mt-1 border border-gray-100 rounded-md p-2"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">Body</label>
                    <textarea
                        className=" w-full outline-none focus:ring-2 mt-1 border border-gray-100 rounded-md p-2"
                        name=""
                        id=""
                        cols="30"
                        rows="7"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className=" bg-yellow-700 w-full rounded-md uppercase p-2 font-bold text-white"
                >
                    Sumbit post
                </button>
            </form>
        </div>
    );
};

export default Add;
