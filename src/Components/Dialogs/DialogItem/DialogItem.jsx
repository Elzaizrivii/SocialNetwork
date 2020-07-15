import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let now = new Date().toLocaleString();
    let path = "/dialogs/active/" + props.id;

    return (
        <NavLink to={path} className={s.dialog}>
            <div className={s.avatar}>
                <i className="fa fa-user-circle" aria-hidden="true"> </i>
            </div>
            <div className={s.info}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.message}>{props.message}</div>
            </div>
            <div className={s.data}>
                {now}
            </div>
        </NavLink>
    );
};
export default DialogItem;