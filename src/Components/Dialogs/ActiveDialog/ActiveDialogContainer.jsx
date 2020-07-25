import React from "react";
import {sendMessageCreator} from "../../../Redux/dialogsReducer";
import ActiveDialog from "./ActiveDialog";
import {connect} from "react-redux";

let mapStateProps = (state) => {

    return {
        dialogsPage: state.dialogPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sandMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        },
    };
};

export default connect(mapStateProps, mapDispatchToProps)(ActiveDialog);