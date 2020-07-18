import React from "react";
import {connect} from "react-redux";
import {
    follow,
    followInProgress,
    setCurrentPage,
    setIsFetching,
    setTotalUserCountPage,
    setUsers,
    unFollow
} from "../../Redux/usersReducer";
import Users from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {usersApi} from "../../Api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        usersApi.getUsers(this.props.currentPage,this.props.pageSize).then(response => {
            this.props.setUsers(response.data);
            this.props.setIsFetching(false);
            this.props.setTotalUserCountPage(response.headers['x-total-count']);
        });
    }

    onPageChange = (pageNumber) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersApi.getUsers(pageNumber,this.props.pageSize).then(response => {
            this.props.setUsers(response.data);
            this.props.setIsFetching(false)
        });
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
                followInProgress = {this.props.followInProgress}
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
    setUsers,
    setCurrentPage,
    setTotalUserCountPage,
    setIsFetching,
    followInProgress
})(UsersContainer);