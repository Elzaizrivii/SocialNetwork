import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import undefinedAvatar from '../../Images/undefined-avatar.jpg';

const Users = (props) => {

    if (props.users.length === 0) {

        axios.get('http://localhost:3001/users/').then(respons => {
            props.setUsers(respons.data);
        });
    }

    return <div className={s.container}>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.avatar} src={u.avatarUrl !=null ? u.avatarUrl:undefinedAvatar }/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    props.unFollow(u.id)
                                }}>Подписаться</button> :
                                <button onClick={() => {
                                    props.follow(u.id)
                                }}>Отписаться</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.userName}</div>
                            <div>{u.status}</div>
                        </span>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </div>)}
            </div>
        </div>
        <div className={s.sidebar}>
            <div className={s.allMessage}>Все сообщения</div>
            <div className={s.notRead}>Непрочитанные</div>
            <div className={s.important}>Важные</div>
        </div>
    </div>;
};

export default Users;