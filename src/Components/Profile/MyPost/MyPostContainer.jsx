import React from 'react';
import {addPostActionCreator, updateNewPostText} from "../../../Redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

let mapStateProps = (state) => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },

        onPostChange: (newText) => {
            let action = updateNewPostText(newText);
            dispatch(action)
        }
    };
};

const MyPostContainer = connect(mapStateProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;