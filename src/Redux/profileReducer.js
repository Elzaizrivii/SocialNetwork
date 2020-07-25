import {profileApi, usersApi} from "../Api/api";

const ADD_POST = 'ADD_POST';
const SET_PROFILE_USER = 'SET_PROFILE_USER';
const SET_POST = 'SET_POST';
const SET_STATUS = 'SET_STATUS';

let initState = {
    posts: [],
    profile: null,
    status: []
};

export const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST: {

            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }

        case SET_POST:
            return {
                ...state,
                posts: [...state.posts, ...action.posts]
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status.data.status
            };
        case SET_PROFILE_USER:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
};

export const addPostAC = (newPostText) => ({type: ADD_POST,newPostText});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setProfileUsers = (profile) => ({type: SET_PROFILE_USER, profile});
export const setPosts = (posts) => ({type: SET_POST, posts});
export const getProfile = (id) => {
    return (dispatch) => {
        usersApi.getProfile(id).then(data => {
            dispatch(setProfileUsers(data));
        });
    }
};

export const getStatus = (id) => {
    return (dispatch) => {
        profileApi.getStatus(id).then(data => {
            dispatch(setStatus(data));
        });
    }
};

export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status).then(data => {
            dispatch(setStatus(data));
        });
    }
};