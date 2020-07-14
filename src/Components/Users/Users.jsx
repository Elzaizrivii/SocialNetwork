import React, {Component} from "react";
import s from "./Users.module.css";
import undefinedAvatar from "../../Images/undefined-avatar.jpg";
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`http://localhost:3001/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`).then(respons => {
            this.props.setUsers(respons.data);
            this.props.totalUsersCount(respons.headers['x-total-count']);
        });
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`http://localhost:3001/users?_page=${pageNumber}&_limit=${this.props.pageSize}`).then(respons => {
            this.props.setUsers(respons.data);
        });
    };

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={s.container}>
                <div className={s.dialogs}>
                    {pages.map(p =>
                        <span onClick={(e) => {
                            this.onPageChange(p);
                        }} className={this.props.currentPage === p && s.selected}>{p}</span>
                    )}
                    <div className={s.dialogsItems}>
                        {this.props.users.map(u => <div className={s.item} key={u.id}>
                            <img className={s.avatar} src={u.avatarUrl != null ? u.avatarUrl : undefinedAvatar}/>
                            <div className={s.info}>
                                <div className={s.name}>{u.userName}</div>
                                <div>{u.status}</div>
                                <div className={s.location}>
                                    <div>{u.location.city}</div>
                                    <div>{u.location.country}</div>
                                </div>
                            </div>
                            <div>
                                {u.followed ?
                                    <button onClick={() => {
                                        this.props.unFollow(u.id)
                                    }}>Подписаться</button> :
                                    <button onClick={() => {
                                        this.props.follow(u.id)
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
    }
}

export default Users;