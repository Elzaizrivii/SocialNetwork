import React from "react";
import s from './ActiveDialog.module.css'
import MessageItem from "./MessageItem/MessageItem";
import {Field, reduxForm} from "redux-form";

const ActiveDialog = (props) => {

    let messageElements = props.dialogsPage.messages.map(m => <MessageItem message={m.message}/>);

    let addNewMessage = (values) => {
        props.sandMessage(values.newMessageBody);
    };

    const ActiveDialogForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <Field
                    className={s.input}
                    placeholder='Напишите сообщение'
                    name="newMessageBody"
                    component='textarea'/>
                <button className={s.button}>
                    <i className="fa fa-paper-plane-o" aria-hidden="true"> </i>
                </button>
            </form>
        )
    };

    const ActiveDialogReduxForm = reduxForm({
        form: 'ActiveDialogForm'
    })(ActiveDialogForm);

    return (
        <div className={s.content}>
            <div className={s.messageList}>
                <div className={s.item}>
                    {messageElements}
                </div>
            </div>
            <div className={s.newMessage}>
                <img src='https://klike.net/uploads/posts/2019-06/1560664221_1.jpg' className={s.avatar}/>
                <ActiveDialogReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};


export default ActiveDialog;