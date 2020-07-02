import React from "react";
import s from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={s.container}>
            <ProfileInfo/>
            <MyPost
                posts={props.profilePage.posts}
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updateNewPostChange={props.updateNewPostChange}
            />
        </div>
    );
};

export default Profile;