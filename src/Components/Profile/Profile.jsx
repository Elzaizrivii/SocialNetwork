import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {

    return (
        <div className={s.container}>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer
            />
        </div>
    );
};

export default Profile;