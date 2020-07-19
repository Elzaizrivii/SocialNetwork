import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setProfileUsers} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {usersApi} from "../../Api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        if(!id){
            id=1
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

let withUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps,{setProfileUsers,getProfile}) (withUrl);