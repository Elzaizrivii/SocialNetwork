import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUserCountPage,
    setUsers,
    unFollow
} from "../../Redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import {Preloader} from "../common/preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`http://localhost:3001/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`,
            {withCredentials: true}).then(respons => {
            this.props.setUsers(respons.data);
            this.props.setIsFetching(false);
            this.props.setTotalUserCountPage(respons.headers['x-total-count']);
        });
    }

    onPageChange = (pageNumber) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`http://localhost:3001/users?_page=${pageNumber}&_limit=${this.props.pageSize}`,
            {withCredentials: true}).then(respons => {
            this.props.setUsers(respons.data);
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
        isFetching: state.usersPage.isFetching
    }
};

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUserCountPage,
    setIsFetching
})(UsersContainer);