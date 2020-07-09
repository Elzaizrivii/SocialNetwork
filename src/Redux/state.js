const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const ADD_POST = 'ADD_POST';
const SEND_MESSAGE = 'SEND_MESSAGE';

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
        if (action.type === ADD_POST) {

            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {

            this._state.profilePage.newPostText = (action.newText);
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogPage.newMessageBody = (action.body);
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {

            let body = this._state.dialogPage.newMessageBody;

            this._state.dialogPage.newMessageBody = '';
            this._state.dialogPage.messages.push({id: 5, message: body});
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostText = (newText) => ({
    type: UPDATE_NEW_POST_TEXT, newText: newText
});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBody = (body) => ({
   type: UPDATE_NEW_MESSAGE_BODY, body: body
});

export default store;