import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateProps = (state) => {

    return {
        dialogsPage: state.dialogPage,
        isAuth:state.auth.isAuth
    }
};


const DialogsContainer = connect(mapStateProps)(Dialogs);


export default DialogsContainer;