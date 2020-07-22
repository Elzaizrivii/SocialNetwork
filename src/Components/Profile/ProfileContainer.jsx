import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setProfileUsers} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../Hoc/authRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        if (!id) {
            id = 1
        }

        this.props.getProfile(id)
    }

    render() {

        return (
            <Profile{...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state)=>({
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, {setProfileUsers, getProfile})
    , withRouter, WithAuthRedirect)(ProfileContainer);