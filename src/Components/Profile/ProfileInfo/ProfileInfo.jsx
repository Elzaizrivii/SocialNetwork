import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.user}>
            <img className={s.coverEmptyWrap} src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-zoom-backgrounds-free-star-wars-starfield-1587416939.jpg?crop=1xw:1xh;center,top&resize=768:*'>
            </img>
            <img className={s.avatar} src="https://klike.net/uploads/posts/2019-06/1560664221_1.jpg" alt=""/>
            <div className={s.info}>
                <div className={s.name}>
                    User Admin
                </div>
                <div className={s.infoButton}>
                    Изменить информацию
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;