import {usersApi} from "../Api/api";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const IS_FETCHING = 'IS_FETCHING';
const FOLLOW_IN_PROGRESS = 'FOLLOW_IN_PROGRESS';

let initState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followInProgress: []
};

export const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {

                    if (u.id === action.userId) {

                        return {...u, followed: true}
                    }

                    return u;
                }),

            };
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {

                    if (u.id === action.userId) {

                        return {...u, followed: false}
                    }

                    return u;
                }),

            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalCount: action.count
            };
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case FOLLOW_IN_PROGRESS:
            return {
                ...state,
                followInProgress: action.isFetching
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};
export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UN_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUserCountPage = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount});
export const setIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching});
export const followInProgress = (isFetching, userId) => ({type: FOLLOW_IN_PROGRESS, isFetching, userId});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));

        usersApi.getUsers(currentPage, pageSize).then(response => {
            dispatch(setUsers(response.data));
            dispatch(setIsFetching(false));
            dispatch(setTotalUserCountPage(response.headers['x-total-count']));
        });
    }
};

export const getFollow = (id) => {
    return (dispatch) => {

        dispatch(followInProgress(true, id));

        usersApi.getFollow(id).then(data => {

            if (data.resultCode === 0) {

                dispatch(follow(id));
            }
            dispatch(followInProgress(false, id));
        });
    }
};
export const getUnFollow = (id) => {
    return (dispatch) => {

        dispatch(followInProgress(true, id));

        usersApi.getUnFollow(id).then(data => {

            if (data.resultCode === 0) {

                dispatch(unFollow(id));
            }
            dispatch(followInProgress(false, id));
        });
    }
};