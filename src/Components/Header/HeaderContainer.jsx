import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../Redux/authReducer";
import {usersApi} from "../../Api/api";


class HeaderContainer extends React.Component {

    componentDidMount() {
        usersApi.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id,login,email} = data.data;
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