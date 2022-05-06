import "./feed.css";
import Post from "../post/Post";
import Share from "../share/Share";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { axiosInstance } from "../../config";

export default function Feed({ username }) {
    const [posts, setPosts] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        const fetchPosts = async () => {
            const res = username
                ? await axiosInstance.get("/posts/profile/" + username)
                : await axiosInstance.get("posts/timeline/" + user._id)
            setPosts(res.data)
        };
        fetchPosts();
    }, [username, user._id]);
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map(p => (
                    <Post key={p._id} post={p} />
                ))}
            </div>
        </div>
    )
}