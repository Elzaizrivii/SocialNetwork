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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name="Temirhan" id="1"/>
                <DialogsItem name="Aliya" id="2"/>
                <DialogsItem name="Alihan" id="3"/>
            </div>
            <div className={s.messages}>
                <Message message="hello"/>
                <Message message="yo"/>
                <Message message="Hi"/>

            </div>
        </div>
    );
};

export default Dialogs;