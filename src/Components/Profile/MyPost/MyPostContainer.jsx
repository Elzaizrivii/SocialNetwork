import React from 'react';
import {addPost, setPosts, updateNewPostText} from "../../../Redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

let mapStateProps = (state) => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

export default connect(mapStateProps, {

    addPost:addPost,
    onPostChange: (newText) => {
        updateNewPostText(newText);
    },
    setPosts: setPosts
})(MyPost);