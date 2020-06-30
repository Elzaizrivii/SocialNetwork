import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let messageElements = props.messages.map(m => <Message message={m.message} id={m.id}/>);
    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElements}
                    {messageElements}
                </div>
            </div>
            <div className={s.sidebar}>
                <div className={s.allMessage}>Все сообщения</div>
                <div className={s.notRead}>Непрочитанные</div>
                <div className={s.important}>Важные</div>
            </div>
        </div>
    );
};

export default Dialogs;