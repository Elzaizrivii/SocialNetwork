import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, setProfileUsers, setStatus, updateStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../Hoc/authRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        if (!id) {
            id = 1
        }

        this.props.getProfile(id);
        this.props.getStatus(id);
    }

    render() {

        return (
            <Profile
                {...this.props}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                profile={this.props.profile}
            />
        );
    }
}

let mapStateToProps = (state)=>({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    updateStatus: state.profilePage.updateStatus
});

export default compose(
    connect(mapStateToProps, {setProfileUsers, getProfile, getStatus, updateStatus})
    , withRouter, WithAuthRedirect)(ProfileContainer);