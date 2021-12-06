import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api";

const Show = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.getSinglePost(id).then((res) => {
            setIsLoading(false);

            const post = res.data.data;
            setTitle(post.title);
            setAuthor(post.author);
            setBody(post.body);
        });
    }, []);

    return (
        <div className=" max-w-4xl mx-auto p-3 ">
            {isLoading && (
                <div className=" w-full h-full flex justify-center items-center p-5 font-bold text-2xl">
                    {" "}
                    <p>Loading Post...</p>
                </div>
            )}
            {!isLoading && (
                <>
                    <h3 className=" font-semibold text-lg text-center my-2">
                        {title}
                    </h3>
                    <br />
                    <small className=" italic">written by: {author}</small>
                    <br />
                    <div className=" text-base my-2">{body}</div>
                    <Link
                        to={`/posts/${id}/edit`}
                        className=" bg-yellow-300 rounded-md py-2 px-5"
                    >
                        Edit Post
                    </Link>
                </>
            )}
        </div>
    );
};

export default Show;
