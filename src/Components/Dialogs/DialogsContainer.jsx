import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateProps = (state) => {

    return {
        dialogsPage: state.dialogPage
    }
};


const DialogsContainer = connect(mapStateProps)(Dialogs);


export default DialogsContainer;