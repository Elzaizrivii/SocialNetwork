import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../Hoc/authRedirect";
import {compose} from "redux";

let mapStateProps = (state) => {

    return {
        dialogsPage: state.dialogPage,
    }
};

export default compose(connect(mapStateProps), WithAuthRedirect)(Dialogs);
