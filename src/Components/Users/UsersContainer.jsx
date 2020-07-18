import React from "react";
import {connect} from "react-redux";
import {
    follow,
    followInProgress, getFollow, getUnFollow, getUsers,
    setCurrentPage,
    unFollow,
} from "../../Redux/usersReducer";
import Users from "./Users";
import {Preloader} from "../common/preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    render() {
        return <>
            <Preloader isFetching={this.props.isFetching}/>
            <Users
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                followInProgress={this.props.followInProgress}
                getFollow={this.props.getFollow}
                getUnFollow={this.props.getUnFollow}
            />;
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress
    }
};

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    followInProgress,
    getUsers,
    getFollow,
    getUnFollow
})(UsersContainer);