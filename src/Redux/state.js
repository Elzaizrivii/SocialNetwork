import React from "react";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'hello World', like: 22, dislike: 111},
            {id: 2, message: 'norm', like: 32, dislike: 1},
            {id: 3, message: 'norm', like: 2, dislike: 0},
            {id: 4, message: 'insert', like: 6, dislike: 1},
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
export default state;