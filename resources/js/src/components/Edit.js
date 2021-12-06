import { useState, useEffect } from "react";
import api from "../api";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.updatePost({ title, author, body }, id);
            navigate("/");
        } catch (e) {
            console.log("an error occured " + e);
        }
        console.log(title, author);
    };

    useEffect(() => {
        api.getSinglePost(id).then((res) => {
            const post = res.data.data;
            setTitle(post.title);
            setAuthor(post.author);
            setBody(post.body);
        });
    }, []);
    return (
        <div className=" p-3 max-w-4xl mx-auto">
            <h2 className=" font-semibold text-lg">This is the Edit page</h2>
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
                    Update post
                </button>
            </form>
        </div>
    );
};

export default Edit;
