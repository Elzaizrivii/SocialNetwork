import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

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
                {
                    id: 1,
                    message: 'Привет'
                },
                {
                    id: 2,
                    message: 'Как дела'
                },
                {
                    id: 3,
                    message: 'В какой день?'
                }
            ],
            newMessageBody: '',
        },
        sidebar: {}
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.profilePage, action);
        this._callSubscriber(this._state);
    }
};


export default store;