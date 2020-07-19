import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} message={d.message}/>);

    if(!props.isAuth)return <Redirect to={'/login'}/>;
    return (<div className={s.container}>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
        </div>
        <div className={s.sidebar}>
            <div className={s.allMessage}>Все сообщения</div>
            <div className={s.notRead}>Непрочитанные</div>
            <div className={s.important}>Важные</div>
        </div>
    </div>);
};

export default Dialogs;