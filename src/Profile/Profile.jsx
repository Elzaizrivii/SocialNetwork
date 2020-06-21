import React from "react";
import s from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={s.container}>
            <ProfileInfo/>
            <MyPost />
        </div>
    );
};

export default Profile;