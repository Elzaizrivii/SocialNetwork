import React from "react";
import * as axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../Redux/authReducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`http://localhost:3001/auth/1`, {withCredentials: true}).then(respons => {

            if (respons.data.resultCode === 0) {
                let {id,login,email} = respons.data.data;
                this.props.setUserData(id,login,email);
            }
        });
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setUserData})(HeaderContainer);