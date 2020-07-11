import React from "react";
import {sendMessageCreator, updateNewMessageBody} from "../../../Redux/dialogsReducer";
import ActiveDialog from "./ActiveDialog";
import {connect} from "react-redux";

let mapStateProps = (state) => {

    return {
        dialogsPage: state.dialogPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sandMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageChange: (body) => {
            dispatch(updateNewMessageBody(body));
        }
    };
};

const ActiveDialogContainer = connect(mapStateProps, mapDispatchToProps)(ActiveDialog);


export default ActiveDialogContainer;