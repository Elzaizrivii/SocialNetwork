import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: "Temirhan"},
        {id: 2, name: "Aliya"},
        {id: 2, name: "Alihan"}
    ];

    let dialogElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);

    let messages = [
        {id: 1, message: "Hello"},
        {id: 2, message: "Hi"},
        {id: 2, message: "Yo"}
    ];

    let messageElements = messages.map(m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;