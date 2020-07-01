import React from "react";
import {renderEnterTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'hello World', likeCount: 22},
            {id: 2, message: 'norm', likeCount: 32},
            {id: 3, message: 'norm', likeCount: 2},
        ],
    },
    dialogPage: {
        dialogs: [
            {
                id: 1,
                name: "Temirhan",
                avatar: "https://sun9-19.userapi.com/c846020/v846020311/109b75/pwDzEUZ9SQM.jpg?ava=1"
            },
            {
                id: 2,
                name: "Aliya",
                avatar: "https://sun9-19.userapi.com/c846020/v846020311/109b75/pwDzEUZ9SQM.jpg?ava=1"
            },
            {
                id: 2,
                name: "Alihan",
                avatar: "https://sun9-19.userapi.com/c846020/v846020311/109b75/pwDzEUZ9SQM.jpg?ava=1"
            }
        ],
        messages: [
            {id: 1, message: "Hello"},
            {id: 2, message: "Hi"},
            {id: 2, message: "Yo"}
        ],
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
    };

    state.profilePage.posts.push(newPost);
    renderEnterTree(state);
};

export default state;