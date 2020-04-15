import React from "react";
import Post from "../MyPost/Post/Post";

const MyPost = () => {
    return (
        <div>
            <Post message="hello World" like="10" dislike="20"/>
            <Post message="norm" like="3" dislike="0"/>
            <Post message="perfect" like="11232130" dislike="212310"/>
            <Post message="insert" like="-10" dislike="-21320"/>
        </div>
    );
};

export default MyPost;