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

    let addPost = () => {
        props.dispatch({
            type:'ADD_POST'
        });
    };

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.dispatch ({
            type:'UPDATE_NEW_POST_CHANGE',
            newText});
    };

    return (
        <div className={s.content}>
            <div className={s.newPost}>
                <img src='https://klike.net/uploads/posts/2019-06/1560664221_1.jpg' className={s.avatar}/>
                <textarea onChange={onPostChange}
                          className={s.input}
                          ref={newPostElement}
                          placeholder='Что у вас нового?' value={props.newPostText}/>
                <button className={s.button} onClick={addPost}>
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