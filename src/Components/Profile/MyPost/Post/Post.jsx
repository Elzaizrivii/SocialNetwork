import React from "react";
import s from './Post.module.css';

const Post = (props) => {

    let now = new Date().toLocaleString();

    return (
        <div className={s.item}>
            <div className={s.header}>
                <img src='https://klike.net/uploads/posts/2019-06/1560664221_1.jpg'/>
                <div className={s.user}>
                    <div className={s.name}>{props.message}</div>
                    <div className={s.data}>{now}</div>
                </div>
            </div>
            <div className={s.body}>
                <div className={s.post}>{props.message}</div>
                    <div className={s.like}>
                        <i className="fa fa-thumbs-o-up" aria-hidden="true">{props.like} </i>
                    </div>
            </div>
        </div>
    );
};

export default Post;