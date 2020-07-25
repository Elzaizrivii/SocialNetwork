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
    ]
};

export const dialogsReducer = (state = initState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}]
            }
        }
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
