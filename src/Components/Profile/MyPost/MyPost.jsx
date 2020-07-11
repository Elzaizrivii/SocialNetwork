import React from 'react';
import Post from './Post/Post';
import s from './MyPost.module.css';

const MyPost = (props) => {

    let postsElement = props.posts.map(p =>
        <Post
            message={p.message}
            id={p.id}
            like={p.like}
        />
    );

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost(props.addPost);
    };

    let updateNewPostText = () => {
        let action = newPostElement.current.value;
        props.onPostChange(action);
    };

    return (
        <div className={s.content}>
            <div className={s.newPost}>
                <img src='https://klike.net/uploads/posts/2019-06/1560664221_1.jpg' className={s.avatar}/>
                <textarea onChange={updateNewPostText}
                          className={s.input}
                          ref={newPostElement}
                          placeholder='Что у вас нового?' value={props.newPostText}/>
                <button className={s.button} onClick={onAddPost}>
                    <i className="fa fa-paper-plane-o" aria-hidden="true"> </i>
                </button>
            </div>
            <div className={s.item}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPost;