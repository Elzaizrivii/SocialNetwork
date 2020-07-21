import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

export const WithAuthRedirect = (Component) => {

    let mapStateToPropsRedirect = (state)=>({
        isAuth: state.auth.isAuth
    });

    class AuthRedirect extends React.Component {

        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>;

            return <Component {...this.props}/>
        }
    }

    let withUrl = connect(mapStateToPropsRedirect)(AuthRedirect);

    return withUrl;
};