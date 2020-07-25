import React from 'react';
import Post from './Post/Post';
import s from './MyPost.module.css';
import * as axios from "axios";
import {Field, reduxForm} from "redux-form";

const ProfileForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field
                name={'newPostText'}
                component={'textarea'}
                className={s.input}
                placeholder='Что у вас нового?'/>
            <button
                className={s.button}>
                <i className="fa fa-paper-plane-o" aria-hidden="true"> </i>
            </button>
        </form>)
};

const ProfileReduxForm = reduxForm({
    form: 'ProfileForm'
})(ProfileForm);


const MyPost = (props) => {

    if (props.posts.length === 0) {

        axios.get('http://localhost:3001/posts/').then(respons => {
            props.setPosts(respons.data);
        });
    }

    let postsElement = props.posts.map(p =>
        <Post
            message={p.message}
            id={p.id}
            like={p.like}
        />
    );

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.content}>
            <div className={s.newPost}>
                <img src='https://klike.net/uploads/posts/2019-06/1560664221_1.jpg' className={s.avatar}/>
                <ProfileReduxForm onSubmit={onAddPost}/>
            </div>
            <div className={s.item}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPost;