import React from 'react';
import Post from './Post/Post';
import s from './MyPost.module.css';

const MyPost = (props) => {

    let postsElement = props.posts.map(p =>
        <Post
            message={p.message}
            id={p.id}
            like={p.like}
            dislike={p.dislike}
        />
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    };

    return (
        <div className={s.content}>
            <div className={s.newPost}>
                <textarea ref={newPostElement} title='Что у вас нового?' aria-label='Что у вас нового?' placeholder='Что у вас нового?'>

                </textarea>
                <button onClick={addPost}>Отправить</button>
            </div>
            <div className={s.item}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPost;