import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

const Home = () => {
    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.getAllPosts().then((res) => {
            const results = res.data;
            setIsLoading(false);
            setPosts(results.data);
        });
    }, []);
    return (
        <div className="p-3 max-w-4xl mx-auto">
            <h2 className=" font-semibold text-lg">
                Latest News from our team
            </h2>
            {isLoading && (
                <div className=" w-full h-full flex justify-center items-center p-5 font-bold text-2xl">
                    {" "}
                    <p>Getting Posts...</p>
                </div>
            )}
            {posts &&
                posts.map((post) => (
                    <div
                        key={post.id}
                        className=" border-2 p-3 my-2 rounded-md border-gray-200 "
                    >
                        <h3 className=" text-yellow-400 font-semibold text-xl my-2">
                            {post.title}
                        </h3>
                        <small>written by: {post.author}</small>
                        <br />
                        <Link
                            to={`/posts/${post.id}`}
                            className=" bg-gray-300 py-1 px-4 rounded-md my-2 inline-block"
                        >
                            {" "}
                            Read More{" "}
                        </Link>
                    </div>
                ))}
        </div>
    );
};

export default Home;
