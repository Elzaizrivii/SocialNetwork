import React from "react";
import s from './MessageItem.module.css'

const MessageItem = (props) => {

    return (
        <div className={s.message}>
            <div className={s.item}>{props.message}</div>
        </div>
    );
};
export default MessageItem;