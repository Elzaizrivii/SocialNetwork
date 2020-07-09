import React from "react";
import {sendMessageCreator, updateNewMessageBody} from "../../../Redux/dialogsReducer";
import ActiveDialog from "./ActiveDialog";

const ActiveDialogContainer = (props) => {

    let state = props.store.getState().dialogPage;

    let sandMessage = () => {
        props.store.dispatch(sendMessageCreator());
    };
    let updateNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBody(body));
    };
    return (<ActiveDialog
        sandMessage={sandMessage}
        updateNewMessageChange={updateNewMessageChange}
        dialogPage={state}
    />);
};


export default ActiveDialogContainer;