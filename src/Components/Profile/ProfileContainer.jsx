import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfileUsers} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        if(!id){
            id=1
        }

        axios.get(`http://localhost:3001/profile/`+id).then(respons => {
            this.props.setProfileUsers(respons.data);
        });
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

export default connect(mapStateToProps,{setProfileUsers}) (withUrl);