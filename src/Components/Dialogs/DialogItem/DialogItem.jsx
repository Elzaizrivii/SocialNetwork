import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let now = new Date().toLocaleString();
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <div className={s.avatar}>
                <i className="fa fa-user-circle" aria-hidden="true"> </i>
            </div>
            <div className={s.info}>
                <NavLink to={path} className={s.name}>
                    {props.name}
                </NavLink>
                <div className={s.message}>{props.message}</div>
            </div>
            <div className={s.data}>
                {now}
            </div>
        </div>
    );
};
export default DialogItem;