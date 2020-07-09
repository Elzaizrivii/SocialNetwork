import React from "react";
import s from './ActiveDialog.module.css'
import MessageItem from "./MessageItem/MessageItem";
import {sendMessageCreator, updateNewMessageBody} from "../../../Redux/state";

const ActiveDialog = (props) => {

    let state = props.store.getState().dialogPage;

    let messageElements = state.messages.map(m => <MessageItem message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSandMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBody(body));
    };
    return (
        <div className={s.content}>
            <div className={s.messageList}>
                <div className={s.item}>
                    {messageElements}
                </div>
            </div>
            <div className={s.newMessage}>
                <img src='https://klike.net/uploads/posts/2019-06/1560664221_1.jpg' className={s.avatar}/>
                <textarea
                    onChange={onNewMessageChange}
                    className={s.input}
                    placeholder='Напишите сообщение'
                    value={newMessageBody}/>
                <button className={s.button}
                        onClick={onSandMessageClick}>
                    <i className="fa fa-paper-plane-o" aria-hidden="true"> </i>
                </button>
            </div>
        </div>
    );
};


export default ActiveDialog;