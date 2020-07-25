import React from 'react';
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {addPostAC, setPosts} from "../../../Redux/profileReducer";

let mapStateProps = (state) => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostAC(newPostText));
        },
        setPosts:setPosts
    }
};

export default connect(mapStateProps, mapDispatchToProps)(MyPost);