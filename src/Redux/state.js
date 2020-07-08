import React from "react";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hello World', likeCount: 22},
                {id: 2, message: 'norm', likeCount: 32},
                {id: 3, message: 'norm', likeCount: 2},
            ],
            newPostText: ''
        },
        dialogPage: {
            dialogs: [
                {
                    id: 1,
                    name: "Пользователь 1",
                    message: 'Спасибо)'
                },
                {
                    id: 2,
                    name: "Пользователь 2",
                    message: 'Чувак когда дедлайн?'
                },
                {
                    id: 3,
                    name: "Пользователь 3",
                    message: 'Как дела?'
                }
            ],
            messages: [
                {id: 1, message: "Hello"},
                {id: 2, message: "Hi"},
                {id: 3, message: "Yo"}
            ],
        }
    },

    getState() {
        return (this._state)
    },

    _callSubscriber() {
        console.log('rerender');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === "ADD_POST") {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE_NEW_POST_CHANGE") {
            this._state.profilePage.newPostText = (action.newText);
            this._callSubscriber(this._state);
        }
    }
};

window.store = store;
export default store;