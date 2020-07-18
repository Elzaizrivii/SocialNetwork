import React from "react";
import s from "./Users.module.css";
import undefinedAvatar from "../../Images/undefined-avatar.jpg";
import {NavLink} from "react-router-dom";
import {usersApi} from "../../Api/api";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                {pages.map(p =>
                    <span key={props.users.id} onClick={(e) => {
                        props.onPageChange(p);
                    }} className={props.currentPage === p && s.selected}>{p}</span>
                )}
                <div className={s.dialogsItems}>
                    {props.users.map(u => <div className={s.item} key={u.id}>
                        <NavLink className={s.link} to={'/profile/' + u.id}>
                            <img className={s.avatar} src={u.avatarUrl != null ? u.avatarUrl : undefinedAvatar}/>
                            <div className={s.info}>
                                <div className={s.name}>{u.userName}</div>
                                <div>{u.status}</div>
                                <div className={s.location}>
                                    <div>{u.location.city}</div>
                                    <div>{u.location.country}</div>
                                </div>
                            </div>
                        </NavLink>
                        <div>
                            {u.followed ?

                                // данные запросов для кнопок захардкоженны в БД из за server-json
                                <button

                                    disabled={props.followInProgress.some}
                                    // TODO выскакивает ошибка
                                    // .some(id => id === u.id)
                                    onClick={() => {

                                        props.followInProgress(true, u.id);
                                        usersApi.getFollow(u.id).then(data => {

                                            if (data.resultCode === 0) {

                                                props.follow(u.id);
                                            }
                                            props.followInProgress(false, u.id);
                                        });
                                    }}>Подписаться</button> :
                                <button
                                    disabled={props.followInProgress.some}
                                    // .some(id => id === u.id)
                                    onClick={() => {
                                        props.followInProgress(true, u.id);
                                        usersApi.getUnFollow(u.id).then(data => {
                                            if (data.resultCode === 0) {

                                                props.unFollow(u.id)
                                            }
                                            props.followInProgress(false, u.id);
                                        });
                                    }}>Отписаться</button>}
                        </div>
                    </div>)}
                </div>
            </div>
            <div className={s.sidebar}>
                <div className={s.allMessage}>Все сообщения</div>
                <div className={s.notRead}>Непрочитанные</div>
                <div className={s.important}>Важные</div>
            </div>
        </div>
    );
};

export default Users;