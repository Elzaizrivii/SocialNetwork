import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/preloader/Preloader";
import ProfileStatus from "../ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>;
    }

    return (
        <div className={s.user}>
            <img className={s.coverEmptyWrap} src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-zoom-backgrounds-free-star-wars-starfield-1587416939.jpg?crop=1xw:1xh;center,top&resize=768:*'>
            </img>
            <img className={s.avatar} src={props.profile.avatarUrl} alt=""/>
            <div className={s.info}>
                <div className={s.name}>
                    {props.profile.userName}
                </div>
                <div className={s.infoButton}>
                    Изменить информацию
                </div>
            </div>
            <ProfileStatus status={"Привет мой дружаня)"}/>
        </div>
    );
};

export default ProfileInfo;