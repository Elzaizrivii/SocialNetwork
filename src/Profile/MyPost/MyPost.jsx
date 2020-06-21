import React from 'react';
import Post from '../MyPost/Post/Post';
import s from './MyPost.module.css';

const MyPost = () => {
    let posts = [
        {id: 1, message: 'hello World', like: 22, dislike: 111},
        {id: 2, message: 'norm', like: 32, dislike: 1},
        {id: 3, message: 'norm', like: 2, dislike: 0},
        {id: 4, message: 'insert', like: 6, dislike: 1},
    ];

    let postsElement = posts.map(p =>
        <Post
            message={p.message}
            id={p.id}
            like={p.like}
            dislike={p.dislike}
        />
    );

    return (
        <div className={s.content}>
            <div className={s.newPost}>
                <textarea title='Что у вас нового?' aria-label='Что у вас нового?' placeholder='Что у вас нового?'>

                </textarea>
                <button className={s.hover}>Отправить</button>
            </div>
            <div className={s.item}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPost;