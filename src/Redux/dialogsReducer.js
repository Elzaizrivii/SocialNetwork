const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initState = {

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
};

export const dialogsReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = (action.body);
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 5, message: body});
            return state;
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBody = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
});
